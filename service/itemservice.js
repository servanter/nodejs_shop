var async = require('async');
var Sequelize = require('sequelize');
var Item = require('../model/item');
var ItemClass = require('../model/itemclass');
var Position = require('../model/itemposition');
var Color = require('../model/dictcolor');
var Paging = require('../util/paging');
var Convert = require('../util/convert');
var Crypto = require('../util/crypto_util');
var Constants = require('../util/constants');
var itemSubFactory = require('./itemsubfactory');
var model = require('../model/modelrelation');
exports.findItemsIndexPositionsByShopId = function(shopId, paging, callback) {
    async.waterfall([
        function(cb) {
            findPositions(shopId, 1, paging, function(data) {
                cb(null, data);
            })
        },
        function(data, cb) {
            Item.count({
                include: [{
                    model: Position,
                    required: true,
                    as: 'position',
                    where: {
                        position: 1,
                        is_del: 0
                    }
                }],
                where: {
                    shop_id: shopId
                }
            }).success(function(count) {
                var pag = new Paging(count, paging.page, paging.pageSize, data);
                cb(null, pag);
            })
        }
    ], function(err, results) {
        if (err) {
            throw err;
        } else {
            callback(results);
        }
    })
}

exports.search = function(shopId, params, searchValue, paging, callback) {
    
    if (params.a && params.a != '0') {
        var category = parseInt(params.a);
        var subService = new itemSubFactory.getService(category);
        subService.findList(shopId, params, searchValue, paging, function(result) {
            result.result.forEach(function(item, index) {
                item.encrypt = Crypto.encryptAes(item.id + Constants.cryptoSplit + category);
            })
            callback(result);
        });
    } else {
        var whereConditions = {
            shop_id: shopId
        };
        if(searchValue) {
            whereConditions.short_name = {};
            whereConditions.short_name.like = '%' + searchValue + '%';
        }
        // default
        async.waterfall([
            function(cb) {
                Item.findAll({
                    where: whereConditions,
                    offset: paging.sinceCount,
                    limit: paging.pageSize
                }).success(function(data) {
                    var arr = Convert.values2Arr(data);
                    cb(null, arr);
                });
            },
            function(data, cb) {
                Item.count({
                    where: whereConditions
                }).success(function(count) {
                    var pag = new Paging(count, paging.page, paging.pageSize, data);
                    cb(null, pag);
                })
            }
        ], function(err, result) {
            if (err) {
                throw err;
            } else {
                result.result.forEach(function(item, index) {
                    item.encrypt = Crypto.encryptAes(item.detail_id + Constants.cryptoSplit + item.class_id);
                })
                callback(result);
            }
        })
    }

}

exports.findClasses = function(callback) {
    ItemClass.findAll().success(function(data) {
        var arr = Convert.values2Arr(data);
        callback(arr);
    })
}


exports.save = function(item, callback) {
    Item.create(item).complete(function(err, data) {
        if (err) {
            callback(false);
        } else {
            callback(true);
        }
    })
}

exports.findById = function(id, callback) {
    async.waterfall([
        function(cb) {
            Item.findOne({
                where: {
                    id: id
                }
            }, {
                subQuery: false
            }).success(function(data) {
                cb(null, data);
            })
        },
        function(data, cb) {
            var subFactory = new itemSubFactory.getService(parseInt(data.class_id));
            if (subFactory) {
                subFactory.findDetail(data.dataValues.id, function(result) {
                    cb(null, {
                        item: data.dataValues,
                        detail: result
                    });
                });

            }
        }
    ], function(err, results) {
        callback(results);
    })
}

exports.findItemClassesByShopId = function(shopId, callback) {
    Item.findAll({
        attributes: [
            [Sequelize.fn('COUNT', 'class_id'), 'total']
        ],
        include: [{
            model: ItemClass,
            required: true,
            as: 'category',
            attributes: [
                ['alias', 'alias'],
                ['id', 'id']
            ]
        }],
        where: {
            shop_id: shopId
        },
        group: ['class_id'],
        order: [
            [Sequelize.fn('COUNT', 'class_id'), 'DESC']
        ]
    }, {
        subQuery: false
    }).success(function(result) {
        var arr = [];
        for (var i = 0; i < result.length; i++) {
            arr.push({
                name: result[i].category.alias,
                link: 'a' + result[i].category.id + 'b0c0d0',
                total: result[i].dataValues.total
            });
        }
        callback(arr);
    })
}

exports.findAttributesByClassId = function(classId, callback) {
    var subFactory = new itemSubFactory.getService(parseInt(classId));
    subFactory.findFullConditions(function(result) {
        callback(result);
    })
}


function findPositions(shopId, p, paging, callback) {
    Item.findAll({
        include: [{
            model: Position,
            as: 'position',
            required: true,
            where: {
                position: p,
                is_del: 0
            }
        }],
        where: {
            shop_id: shopId
        },
        offset: paging.sinceCount,
        limit: paging.pageSize
    }, {
        subQuery: false
    }).success(function(data) {
        data.forEach(function(item, index) {
            item.encrypt = Crypto.encryptAes(item.detail_id + Constants.cryptoSplit + item.class_id + Constants.cryptoSplit + item.position.item_id);
        })
        callback(data);
    });
}
exports.findPositions = findPositions;

exports.findCurrentPositionsAndAvaliableItemNames = function(shopId, position, paging, callback) {
    async.waterfall([
        function(cb) {
            findPositions(shopId, position, paging, function(data) {
                cb(null, data);
            })
        },
        function(data, cb) {
            var whereConditions = {shop_id : shopId};
            var arr = new Array();
            if(data && data.length) {
                data.forEach(function(item, index) {
                    arr.push(item.id);
                })
            }
            if(arr.length) {
                whereConditions.id = {};
                whereConditions.id.ne = arr;
            }
            Item.findAll({
                attributes: [
                    ['id', 'id'],
                    ['short_name', 'short_name'],
                    ['pic_url', 'pic_url'],
                    ['detail_id', 'detail_id'],
                    ['class_id', 'class_id']
                ],
                where: whereConditions
            }).success(function(result) {
                result.forEach(function(item, index) {
                    item.encrypt = Crypto.encryptAes(item.id + '');

                })
                cb(null, {
                    current: data,
                    items: result
                });
            });
        }
    ], function(err, result) {
        callback(result);
    })
}

exports.removePositions = function(shopId, position, ids, callback) {
    var idArr = new Array();
    var arr = ids.split(',');
    arr.forEach(function(item, index) {
        var message = Crypto.decryptAes(item + '')
        idArr.push(message.split(Constants.cryptoSplit)[2]);
    })
    Position.update({
        is_del: 1
    }, {
        where: {
            shop_id: shopId,
            position: position,
            item_id: { in : idArr
            }
        }
    }).complete(function(err, result) {
        if (result > 0) {
            callback(result);
        } else {
            callback(result);
        }

    })
}

exports.findBaseInfoById = function(encrypt, callback) {
    var id = Crypto.decryptAes(encrypt + '');
    Item.findOne({
        where: {
            id: id
        }
    }).success(function(result) {
        result.setDataValue('encrypt', Crypto.encryptAes(result.detail_id + Constants.cryptoSplit + result.class_id + Constants.cryptoSplit + result.id));
        callback(result);
    })
}

exports.addIndexPosition = function(shopId, encrypt, userId, index, callback) {
    var id = Crypto.decryptAes(encrypt + '');
    if (id) {
        model.Position.create({
            shop_id: shopId,
            item_id: id,
            user_id: userId,
            position: index

        }).complete(function(err, result) {
            if (err) {
                callback(false);
            } else {
                callback(result.id);
            }
        })
    }
}
