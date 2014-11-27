var pageProductEffect = function() {
    var a = $('[data-getDetail="more"]'),
    b = $('[data-mersale="true"]'),
    c = $("#goods_images li"),
    d = $(".detail-box"),
    e = {
        init: function() {
            var a = saveProValue();
            e.update(a.product_id, a.is_old, a.filterSize)
        },
        getSizeAvailableText: function(a) {
            var b = new Array;
            return b.push('<li data-size="'),
            b.push(a.id),
            b.push('" class="choose" data-maxamount="'),
            b.push(a.max),
            b.push('" data-minamount="'),
            b.push(a.min),
            b.push('" data-sizeStock="'),
            b.push(a.stock),
            b.push('">'),
            b.push(a.name),
            b.push("</li>"),
            b.join("")
        },
        getSizeNotAvailableText: function(a) {
            return '<li data-size="" class="none">' + a.name + "</li>"
        },
        isSizeStockAvailable: function(a) {
            return a.stock > 0
        },
        isItemStockAvailable: function(a) {
            for (var b = !1,
            c = 0; c < a.length; c++) if (a[c].stock > 0) {
                b = !0;
                break
            }
            return b
        },
        update: function(a, b, c) {
            if (a) {
                var f = "http://stock.vipshop.com/detail/?merchandiseId=" + a + "&is_mobile=1";
                b && (f = f + "&is_old=" + b),
                $.ajax({
                    url: f,
                    dataType: "jsonp",
                    jsonpCallback: "handleStock",
                    success: function(a) {
                        if (a && a.items && 0 != a.items.length) {
                            var b = a.items,
                            f = $("ul.good_sizechioce");
                            f.empty();
                            for (var g = "",
                            h = 0; h < b.length; h++) {
                                var i = b[h];
                                g += e.isSizeStockAvailable(i) ? e.getSizeAvailableText(i) : e.getSizeNotAvailableText(i)
                            }
                            f.html(g),
                            $(".good_salesize input[name='size']").val("");
                            var j = $("ul.good_sizechioce .choose");
                            if (1 == j.length) {
                                var k = {
                                    prev: j.parent().prev().children('[data-pro_stock="true"]'),
                                    stock: j.data("sizestock")
                                };
                                k.stock > 0 && k.stock < 10 ? k.prev.show().children("b").html(k.stock) : k.prev.hide(),
                                j.addClass("select"),
                                $(".good_salesize input[name='size']").val(j.attr("data-size"))
                            } else j.each(function() {
                                var a = $(this),
                                b = {
                                    prev: a.parent().prev().children('[data-pro_stock="true"]'),
                                    stock: a.data("sizestock")
                                };
                                return a.text() == c ? (a.addClass("select"), b.stock > 0 && b.stock < 10 ? b.prev.show().children("b").html(b.stock) : b.prev.hide(), $(".good_salesize input[name='size']").val(a.attr("data-size")), !1) : void 0
                            });
                            e.isItemStockAvailable(b) ? ($("div.good_salesize").css("display", "block"), $("#goods_images .seldout").remove(), d.children(".navbar-brand").children(".btn").removeClass("disabled").addClass("btn-purple").attr("data-animate", "true").attr("data-addjump", "1").attr("data-addcart", "true")) : ($("div.good_salesize").css("display", "none"), 0 == $("#goods_images .seldout").length && $("#goods_images").append('<div class="seldout clearfix"> <span></span> </div>'), d.children(".navbar-brand").children(".btn").removeClass("btn-purple").addClass("disabled").removeAttr("data-animate").removeAttr("data-addjump").removeAttr("data-addcart"))
                        }
                    }
                })
            }
        }
    },
    f = {
        init: function() {
            var b = a,
            c = {
                elem: b,
                pid: b.prev().find('input[name="product_id"]').length ? parseInt(b.prev().find('input[name="product_id"]').val()) : null,
                child: b.next().children().filter(".loading"),
                check: b.data("merchandise").toString(),
                type: null
            };
            c.type = "" != c.check && "string" == typeof c.check && "normal" == c.check ? !0 : !1,
            !isNaN(c.pid) && null != c.pid && (c.elem.hide(), c.child.show(), f.detail(c))
        },
        detail: function(a) {
            if (a.type) var b = {
                url: "ajaxapi-getproductdetail.html?" + (new Date).getTime(),
                data: {
                    productid: a.pid
                },
                type: "GET"
            };
            else var b = {
                url: "ajaxapi-getbeautydetail.html?" + (new Date).getTime(),
                data: {
                    productid: a.pid
                },
                type: "GET"
            };
            b.error = function() {
                a.child.fadeOut(function() {
                    hawk.blackDialog("网络延时，请刷新页面重试！")
                })
            },
            b.success = function(b) {
                b && null != b && void 0 != b ? b.length > 0 && "" != b && null != b && a.child.fadeOut(function() {
                    $(this).prev().css({
                        style: "display:none"
                    }).html(b).fadeIn()
                }) : a.child.fadeOut(function() {
                    hawk.blackDialog("没有更多详情了哦！")
                })
            },
            $.ajax(b)
        }
    },
    g = {
        sizeDefault: function() {
            var a = saveProValue(),
            b = {
                product_id: parseInt(a.product_id),
                brand_id: parseInt(a.brand_id),
                userUrl: "ajaxapi-productsizes.html?"
            };
            return {
                wapDom: b
            }
        },
        init: function() {
            var a = $(this),
            b = {
                elem: a,
                clsName: a.attr("class"),
                size: parseInt(a.data("size"), 10),
                input: a.parent().next().filter('input[name="size"]'),
                pars: a.parent(),
                parent: a.parent().parent(),
                index: a.parent().children().index(this),
                margeAuto: ($(window).innerWidth() - (.9 * $(window).innerWidth() + 2)) / 2,
                top: a.position().top + parseInt(a.css("marginTop")) - 60,
                left: a.position().left + (a.innerWidth() / 2 - 15) - ($(window).innerWidth() - (.9 * $(window).innerWidth() + 2)) / 2 + 15,
                getsize: a.parent().data("mersale"),
                stock: a.data("sizestock")
            };
            "choose" == b.clsName && b.elem.addClass("select").siblings("li").filter(".choose").removeClass("select").parent().next().filter('input[name="size"]').val(b.size),
            b.getsize && (void 0 == b.pars.data("saveData") ? g.getSize(b) : g.saveSize(b.pars.data("saveData"), b))
        },
        getSize: function(a) {
            var b = g.sizeDefault();
            $.ajax({
                url: b.wapDom.userUrl + "s=" + (new Date).getTime(),
                data: {
                    act: b.wapDom.act,
                    productid: b.wapDom.product_id,
                    brandid: b.wapDom.brand_id
                },
                dataType: "json",
                success: function(b) {
                    g.saveSize(b, a),
                    a.pars.data("saveData", b)
                }
            })
        },
        saveSize: function(a, b) {
            b.pars.parent().children(".modal").length && b.pars.parent().children(".modal").hide().remove(),
            $.each(a,
            function(c) {
                var d = a[c],
                e = "",
                f = "";
                "array" == d.type ? (e += '<table class="table table-bordered">', e += "<thead><tr>", $.each(d.content[0],
                function(a, b) {
                    e += "" == b ? "<th>/</th>": "<th>" + b + "</th>"
                }), e += "</tr></thead><tbody><tr>", $.each(d.content[b.index + 1],
                function(a, b) {
                    e += "" == b ? "<td>/</td>": "<td>" + b + "</td>"
                }), e += "</tr></tbody></table>", b.stock > 0 && b.stock < 10 ? (f = "仅剩<b> " + b.stock + " </b>件，错过不再有！", b.top = b.top - 30) : f = "", hawk.showDialog(e, {
                    title: f,
                    width: "90%",
                    setClass: "ui-modal-popover",
                    position: [{
                        top: b.top - 16
                    },
                    {
                        left: b.margeAuto
                    }],
                    tipTool: !0,
                    inserTarget: ".good_salesize",
                    tipsLeft: b.left,
                    overClose: !1,
                    overShow: !1
                })) : (b.stock > 0 && b.stock < 10 ? (f = "仅剩<b> " + b.stock + " </b>件，错过不再有！", b.top = b.top + 17) : f = "", "" != f && hawk.showDialog({
                    title: f,
                    width: "90%",
                    setClass: "ui-modal-popover",
                    position: [{
                        top: b.top
                    },
                    {
                        left: b.margeAuto
                    }],
                    tipTool: !0,
                    inserTarget: ".good_salesize",
                    tipsLeft: b.left,
                    overClose: !1,
                    overShow: !1
                }))
            })
        }
    },
    h = {
        init: function() {
            var a = $(this),
            b = $("#Photo-modal"),
            d = {
                elem: a,
                index: c.index(this),
                top: $(document).scrollTop(),
                model: b.attr("id"),
                imgList: $("img.Touch_mer_biglImg"),
                point: b.find("#Photo-pagination").children().filter("em")
            };
            h.open(d)
        },
        open: function(a) {
            hawk.showDialog({
                modal: "#" + a.model,
                width: 320,
                setClass: "ui-modal-center",
                isCenter: !1,
                top: 0,
                closeBtn: !1,
                modalHide: !0,
                overClose: !1,
                overOpacity: .9
            }),
            window.bigImgReview = new Swipe(document.getElementById("Photo-slide"), {
                startSlide: a.index,
                callback: function(b, c) {
                    index = c,
                    a.imgList.eq(index).hasClass("active") || hawk.loadcheck(a.imgList.eq(index), {
                        oncomplete: function(a, b, c) {
                            this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.attr("src", c).fadeIn(1e3).addClass("active") : a.attr("src", b).fadeIn(1e3).addClass("active")
                        }
                    }),
                    a.point.filter(":eq(" + index + ")").addClass("on").siblings().removeClass("on")
                }
            }),
            a.imgList.each(function() {
                hawk.loadcheck(a.imgList.eq(a.index), {
                    oncomplete: function(a, b, c) {
                        this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.attr("src", c).fadeIn(1e3).addClass("active") : a.attr("src", b).fadeIn(1e3).addClass("active")
                    }
                }),
                $(this).bind("error",
                function() {
                    var b = a.imgList.index(this);
                    h.checkNote.call($(this), b, a.point, window.bigImgReview)
                })
            }),
            a.point.filter(":eq(" + a.index + ")").addClass("on").siblings().removeClass("on")
        },
        slide: function() {
            var a = {
                obj: document.getElementById("goods_images"),
                imgList: $("img.smallImg"),
                point: $("#pro_pagination").children().filter("em"),
                index: 0
            },
            b = new Swipe(a.obj, {
                Distance: 62,
                callback: function(b, c) {
                    var d = c + 1;
                    a.imgList.eq(d).length && !a.imgList.eq(d).hasClass("active") && hawk.loadcheck(a.imgList.eq(d), {
                        oncomplete: function(a, b, c) {
                            this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.hide().attr("src", c).fadeIn(1e3).addClass("active") : a.hide().attr("src", b).fadeIn(1e3).addClass("active")
                        }
                    }),
                    a.point.eq(c).addClass("on").siblings().removeClass("on")
                }
            });
            a.point.eq(a.index).addClass("on").siblings().removeClass("on"),
            hawk.loadcheck(a.imgList.eq(a.index), {
                oncomplete: function(a, b, c) {
                    this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.attr("src", c).fadeIn().addClass("active") : a.attr("src", b).fadeIn().addClass("active")
                }
            }),
            hawk.loadcheck(a.imgList.eq(a.index + 1), {
                oncomplete: function(a, b, c) {
                    this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.attr("src", c).fadeIn().addClass("active") : a.attr("src", b).fadeIn().addClass("active")
                }
            }),
            a.imgList.each(function() {
                $(this).bind("error",
                function() {
                    var c = a.imgList.index(this);
                    h.checkNote.call($(this), c, a.point, b)
                })
            })
        },
        checkNote: function(a, b, c) {
            this.parent().remove(),
            b.eq(a).remove(),
            c.setup()
        }
    },
    i = {
        init: function() {
            var a = $(this),
            b = {
                elem: a,
                shopcart: a.parent().prev(),
                obj: $("[data-mersale]").parent(),
                jump: a.data("addjump"),
                anItem: a.data("animate"),
                product_id: $('input[name="product_id"]').val(),
                size: $('input[name="size"]').length ? $('input[name="size"]').val() : "",
                num: $('input[name="num"]').val(),
                channel_id: $('input[name="channel_id"]').val(),
                cat_id: $('input[name="cat_id"]').val(),
                warehouse: $('input[name="warehouse"]').val(),
                product_name: $('input[name="product_name"]').val(),
                small_image: $('input[name="small_image"]').val(),
                vipshop_price: $('input[name="vipshop_price"]').val(),
                market_price: $('input[name="market_price"]').val(),
                agio: $('input[name="agio"]').val(),
                back_url: encodeURIComponent(location.href)
            };
            i.add(b)
        },
        loginInit: function() {
            var a = $('[data-addcart="true"]'),
            b = {
                elem: a,
                shopcart: a.parent().prev(),
                obj: $("[data-mersale]").parent(),
                jump: a.data("addjump"),
                anItem: a.data("animate"),
                product_id: $('input[name="product_id"]').val(),
                size: a.data("size"),
                num: a.data("num"),
                channel_id: $('input[name="channel_id"]').val(),
                cat_id: $('input[name="cat_id"]').val(),
                warehouse: $('input[name="warehouse"]').val(),
                product_name: $('input[name="product_name"]').val(),
                small_image: $('input[name="small_image"]').val(),
                vipshop_price: $('input[name="vipshop_price"]').val(),
                market_price: $('input[name="market_price"]').val(),
                agio: $('input[name="agio"]').val(),
                back_url: encodeURIComponent(location.href)
            };
            i.add(b)
        },
        add: function(a) {
            var b = hawk.validate.empty(a.size),
            c = hawk.validate.empty(a.product_id),
            e = hawk.validate.empty(a.num);
            if (!c) return hawk.redDialog("无法加入购物车：未知异常"),
            !1;
            if (!b) return hawk.redDialog("无法加入购物车：请先选择尺码"),
            hawk.flicker(a.obj, "ui-note-error", !0, 0, 5, 130),
            !1;
            if (!e || a.num > 1 || a.num <= 0) return hawk.redDialog("无法加入购物车：请勿修改数量"),
            !1;
            if (1 == a.jump) {
                a.elem.html("&nbsp;"),
                $("<div />", {
                    "class": "navbar-mask"
                }).html('<img src="view-src/touch/images/common/loading-big.gif" style="width:20px;margin-right:10px;" /> 加入中...').appendTo(a.elem.parent());
                var f = {
                    url: "index.php?",
                    data: {
                        m: "flow",
                        act: "addtocart",
                        channel_id: a.channel_id,
                        product_id: a.product_id,
                        size: a.size,
                        num: a.num,
                        cat_id: a.cat_id,
                        warehouse: a.warehouse,
                        product_name: a.product_name,
                        small_image: a.small_image,
                        vipshop_price: a.vipshop_price,
                        market_price: a.market_price,
                        agio: a.agio,
                        back_url: a.back_url
                    },
                    dataType: "json",
                    type: "GET"
                };
                f.error = function() {
                    a.elem.html("加入购物车").next().remove(),
                    hawk.redDialog("网络延时，请刷新页面重试！")
                },
                f.success = function(b) {
                    if (a.elem.html("加入购物车").next().remove(), 0 == b.code && b.add_num > 0) {
                        var c = Cookie.Get("WAP_was_added"),
                        e = {
                            elem: $('[data-cTime="true"]'),
                            startTime: b.clear_time,
                            timeStamp: {
                                day: "",
                                hour: "",
                                min: ":",
                                sec: ""
                            },
                            action: "remain",
                            callback: !0,
                            callbackFunction: function() {
                                this.add(this.prev().prev()).fadeOut(function() {
                                    $(this).html("").prev().prev().html("")
                                })
                            },
                            onDoCallback: !0,
                            onDoComplete: function(a, b) {
                                b.complete(!0)
                            }
                        },
                        f = void 0 != $('[data-cartimg="img"]').children("li:eq(0)").find("[data-original]").data("original") ? $('[data-cartimg="img"]').children("li:eq(0)").find("[data-original]").data("original") : $('[data-cartimg="img"]').children("li:eq(0)").find("img").attr("src"),
                        g = {
                            elem: d.find(".i-icon-cart-black"),
                            mode: 1,
                            width: 100,
                            imgSrc: $("<img />", {
                                src: "" + f
                            }),
                            animateSpeed: 1e3,
                            endCallback: function(a) {
                                a.fadeOut(function() {
                                    $(this).remove(),
                                    void 0 == c || "undefined" == c || "" == c ? (hawk.showDialog('<p style="text-align:center">商品优先为您保存20分钟哦！</p>', {
                                        title: '<i class="i-icon-tips"></i>成功加入购物车',
                                        setClass: "ui-modal-btn-tips",
                                        closeCover: "close-count-now_btn",
                                        overClose: !1,
                                        buttons: !0,
                                        type: "defined",
                                        buttonsCus: [{
                                            name: "立即结算",
                                            attribute: !0,
                                            mars_sead: "count-now_btn"
                                        }],
                                        buttonsPos: 2,
                                        buttonsStyle: "btn-purple",
                                        onDoCompleteTo: function(a, b) {
                                            b.oncomplete(!1),
                                            self.location.href = "cart.html" + ("preferential" == cartSource ? "?source=preferential": "")
                                        }
                                    }), hawk.Set("WAP_was_added", 1, "", "", "/")) : hawk.showDialog("<p>商品已加入购物车</p>", {
                                        width: 150,
                                        setClass: "ui-modal-popover",
                                        position: [{
                                            bottom: d.outerHeight()
                                        },
                                        {
                                            left: 10
                                        }],
                                        tipTool: !0,
                                        tipsLeft: 20,
                                        tipsArrow: "black-tips top",
                                        autoClose: 5e3,
                                        closeBtn: !1,
                                        overClose: !1,
                                        overShow: !1,
                                        buttons: !0,
                                        type: "defined",
                                        buttonsCus: [{
                                            name: "立即结算",
                                            attribute: !0,
                                            mars_sead: "tips-count-now_btn"
                                        }],
                                        buttonsPos: 2,
                                        buttonsStyle: "btn-purple btn-round",
                                        onDoCompleteTo: function(a, b) {
                                            b.oncomplete(!1),
                                            self.location.href = "cart.html" + ("preferential" == cartSource ? "?source=preferential": "")
                                        }
                                    })
                                })
                            }
                        };
                        a.shopcart.children().children(".num-cart").html(b.count).fadeIn("slow"),
                        a.shopcart.children().children(".num-cunt").fadeIn("slow"),
                        hawk.countDown(e),
                        hawk.animate(g)
                    } else if (111 == b.code && b.url.length > 1) location.href = b.url;
                    else if (112 == b.code) hawk.showDialog(b.msg, {
                        title: '<i class="i-icon-tips"></i>唯品会提醒您',
                        setClass: "ui-modal-btn-tips",
                        overClose: !1,
                        buttons: !0,
                        type: "defined",
                        onCloseCallBack: !0,
                        buttonsCus: [{
                            name: "切换站点",
                            attribute: !1
                        }],
                        buttonsPos: 1,
                        buttonsStyle: "btn-purple",
                        onDoComplete: function(a, c) {
                            c.oncomplete(!1),
                            hawk.showDialog('<h3><img src="view-src/touch/images/common/loading-big.gif" alt="loading" /></h3><p class="fontred">正在切换</p>', {
                                setClass: "ui-white-loading",
                                overClose: !1,
                                closeBtn: !1,
                                width: 80,
                                overZindex: 1050,
                                autoCall: !0,
                                onAutoComplete: function(a) {
                                    var c = {
                                        url: "index.php?",
                                        data: {
                                            m: "ajax",
                                            act: "change_warehouse",
                                            wh: b.pwarehouse
                                        },
                                        dataType: "json",
                                        type: "POST"
                                    };
                                    c.error = function() {
                                        a.callback(!1),
                                        hawk.redDialog("网络延时，提交订单失败！")
                                    },
                                    c.success = function(b) {
                                        a.callback(!1),
                                        location.href = b && null != b && void 0 != b && 1 == b.code && b.url ? b.url: "index.html"
                                    },
                                    $.ajax(c)
                                }
                            })
                        }
                    });
                    else if (b.code > 0 && b.msg.length > 1) return hawk.redDialog(b.msg),
                    !1
                },
                $.ajax(f)
            }
        },
        cartTime: function() {
            var a = $('[data-cTime="true"]'),
            b = {
                elem: a,
                startTime: parseInt(a.attr("data-cartTime")),
                timeStamp: {
                    day: "",
                    hour: "",
                    min: ":",
                    sec: ""
                },
                action: "remain",
                callback: !0,
                callbackFunction: function() {
                    this.add(this.prev().prev()).fadeOut(function() {
                        $(this).html("").prev().prev().html("")
                    })
                }
            }; ! isNaN(b.startTime) && b.startTime > 0 && hawk.countDown(b)
        },
        saleTime: function() {
            var a = {
                elem: $('[data-saleProduct="true"]'),
                container: "span.J-time",
                startTime: $('[data-saleProduct="true"]').attr("data-saletime"),
                milliSec: !0,
                interval: 100,
                unitFormat: {
                    day: !0,
                    hour: !0,
                    min: !0,
                    sec: !0,
                    msec: !0
                },
                timeStamp: {
                    day: "天",
                    hour: "时",
                    min: "分",
                    sec: ".",
                    msec: "秒"
                },
                halfwayTime: !1
            };
            hawk.countDown(a)
        }
    },
    j = {
        set: function() {
            c.length && h.slide()
        },
        login: function() {
            var a = $('[data-addcart="true"]');
            a.length && a.data("loginaddcart") && i.loginInit()
        }
    },
    k = {
        events: function() {
            b.off("click.choice.size", "li").on("click.choice.size", "li", g.init),
            c.off("click.show.photo").on("click.show.photo", h.init),
            d.off("click.add.cart", '[data-addcart="true"]').on("click.add.cart", '[data-addcart="true"]', i.init)
        }
    },
    l = {
        init: function() {
            var a = m.resolveLocalHref(location.href).params,
            b = (a.from, -1 == document.referrer.indexOf(location.host)),
            c = window.isSoldout;
            b && c && hawk.showDialog('<p style="text-align:center">抱歉，该商品已售完</p><p style="text-align:center">去首页逛逛发现更多惊喜哦！</p>', {
                setClass: "ui-modal-btn-tips",
                closeBtn: !0,
                closeCall: !0,
                overClose: !1,
                buttons: !0,
                type: "defined",
                onCloseCallBack: !0,
                buttonsCus: [{
                    name: "立即逛逛",
                    attribute: !1
                }],
                buttonsPos: 1,
                buttonsStyle: "btn-purple",
                onDoComplete: function(a, b) {
                    b.oncomplete(!1),
                    location.href = "/"
                }
            })
        }
    },
    m = {
        resolveLocalHref: function(a) {
            var b = document.createElement("a");
            return b.href = a,
            {
                num: parseInt(/[0-4]{1}/g.exec(b.pathname), 10),
                source: a,
                file: (b.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
                query: b.search,
                params: function() {
                    for (var a, c = {},
                    d = b.search.replace(/^\?/, "").split("&"), e = d.length, f = 0; e > f; f++) d[f] && (a = d[f].split("="), c[a[0]] = a[1]);
                    return c
                } ()
            }
        }
    },
    n = {
        init: function() {
            isStockUpdate && e.init(),
            k.events(),
            i.cartTime(),
            i.saleTime(),
            j.set(),
            j.login(),
            hawk.download(),
            l.init(),
            VIP.util.backToTopFix({
                right: 10,
                bottom: 68
            }),
            VIP.util.pullLoadMore(f.init, 300),
            VIP.util.downloadApp.init(),
            VIP.util.navFix($(".J_nav"))
        }
    };
    return {
        init: n.init
    }
} ();
$(function() {
    pageProductEffect.init()
});