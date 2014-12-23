/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50519
Source Host           : localhost:3306
Source Database       : wechat_shop

Target Server Type    : MYSQL
Target Server Version : 50519
File Encoding         : 65001

Date: 2014-12-18 15:58:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `weshop_admin_user`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_admin_user`;
CREATE TABLE `weshop_admin_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_pass` varchar(50) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_vertify` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_admin_user
-- ----------------------------
INSERT INTO `weshop_admin_user` VALUES ('1', 'aaa', 'da0464af6d89e21a06e365eaff468317', '1990-01-01 00:00:00', '2014-12-16 15:23:39', '1');
INSERT INTO `weshop_admin_user` VALUES ('2', 'bbb', '123', '2014-12-16 11:26:43', '2014-12-16 11:26:43', '1');
INSERT INTO `weshop_admin_user` VALUES ('3', 'asdas', '123', '2014-12-16 11:32:48', '2014-12-16 11:32:48', '1');
INSERT INTO `weshop_admin_user` VALUES ('10', 'asd', '123', '2014-12-16 11:50:38', '2014-12-16 11:50:38', '1');
INSERT INTO `weshop_admin_user` VALUES ('11', 'ddd', '123', '2014-12-16 11:51:48', '2014-12-16 11:51:48', '1');
INSERT INTO `weshop_admin_user` VALUES ('12', 'aas', '123', '2014-12-16 11:52:08', '2014-12-16 11:52:08', '1');
INSERT INTO `weshop_admin_user` VALUES ('13', 'dfdf', '123', '2014-12-16 11:52:44', '2014-12-16 11:52:44', '1');
INSERT INTO `weshop_admin_user` VALUES ('14', 'asdqw', 'da0464af6d89e21a06e365eaff468317', '2014-12-16 15:20:08', '2014-12-16 15:20:08', '1');
INSERT INTO `weshop_admin_user` VALUES ('15', 'asdqwe', 'da0464af6d89e21a06e365eaff468317', '2014-12-17 14:05:20', '2014-12-17 14:05:20', '1');

-- ----------------------------
-- Table structure for `weshop_area`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_area`;
CREATE TABLE `weshop_area` (
  `id` bigint(20) unsigned NOT NULL,
  `parent_id` bigint(20) NOT NULL DEFAULT '0',
  `area_name` varchar(20) NOT NULL,
  `area_ename` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_area
-- ----------------------------
INSERT INTO `weshop_area` VALUES ('0', '0', '全国', 'quanguo');
INSERT INTO `weshop_area` VALUES ('1', '0', '北京', 'beijing');
INSERT INTO `weshop_area` VALUES ('2', '0', '上海', 'shanghai');
INSERT INTO `weshop_area` VALUES ('3', '0', '天津', 'tianjin');
INSERT INTO `weshop_area` VALUES ('4', '0', '重庆', 'chongqing');
INSERT INTO `weshop_area` VALUES ('5', '0', '河北', 'hebei');
INSERT INTO `weshop_area` VALUES ('6', '0', '山西', 'shanxi2');
INSERT INTO `weshop_area` VALUES ('7', '0', '内蒙古', 'neimenggu');
INSERT INTO `weshop_area` VALUES ('8', '0', '辽宁', 'liaoning');
INSERT INTO `weshop_area` VALUES ('9', '0', '吉林', 'jilin');
INSERT INTO `weshop_area` VALUES ('10', '0', '黑龙江', 'heilongjiang');
INSERT INTO `weshop_area` VALUES ('11', '0', '江苏', 'jiangsu');
INSERT INTO `weshop_area` VALUES ('12', '0', '浙江', 'zhejiang');
INSERT INTO `weshop_area` VALUES ('13', '0', '安徽', 'anhui');
INSERT INTO `weshop_area` VALUES ('14', '0', '福建', 'fujian');
INSERT INTO `weshop_area` VALUES ('15', '0', '江西', 'jiangxi');
INSERT INTO `weshop_area` VALUES ('16', '0', '山东', 'shandong');
INSERT INTO `weshop_area` VALUES ('17', '0', '河南', 'henan');
INSERT INTO `weshop_area` VALUES ('18', '0', '湖北', 'hubei');
INSERT INTO `weshop_area` VALUES ('19', '0', '湖南', 'hunan');
INSERT INTO `weshop_area` VALUES ('20', '0', '广东', 'guangdong');
INSERT INTO `weshop_area` VALUES ('21', '0', '广西', 'guangxi');
INSERT INTO `weshop_area` VALUES ('22', '0', '海南', 'hainan');
INSERT INTO `weshop_area` VALUES ('23', '0', '四川', 'sichuan');
INSERT INTO `weshop_area` VALUES ('24', '0', '贵州', 'guizhou');
INSERT INTO `weshop_area` VALUES ('25', '0', '云南', 'yunnan');
INSERT INTO `weshop_area` VALUES ('27', '0', '陕西', 'shanxi');
INSERT INTO `weshop_area` VALUES ('28', '0', '甘肃', 'gansu');
INSERT INTO `weshop_area` VALUES ('29', '0', '宁夏', 'ningxia');
INSERT INTO `weshop_area` VALUES ('30', '0', '青海', 'qinghai');
INSERT INTO `weshop_area` VALUES ('31', '0', '新疆', 'xinjiang');
INSERT INTO `weshop_area` VALUES ('32', '0', '西藏', 'xizang');
INSERT INTO `weshop_area` VALUES ('33', '0', '台湾', 'taiwan');
INSERT INTO `weshop_area` VALUES ('34', '0', '香港', 'xianggang');
INSERT INTO `weshop_area` VALUES ('35', '0', '澳门', 'aomen');
INSERT INTO `weshop_area` VALUES ('184', '12', '宁波', 'ningbo');
INSERT INTO `weshop_area` VALUES ('185', '2', '普陀', 'putuo');
INSERT INTO `weshop_area` VALUES ('186', '1', '丰台', 'fengtai');
INSERT INTO `weshop_area` VALUES ('187', '20', '深圳', 'shenzhen');
INSERT INTO `weshop_area` VALUES ('188', '20', '东莞', 'dongguan');
INSERT INTO `weshop_area` VALUES ('189', '23', '成都', 'chengdu');
INSERT INTO `weshop_area` VALUES ('190', '20', '佛山', 'foshan');
INSERT INTO `weshop_area` VALUES ('191', '1', '朝阳', 'chaoyang');
INSERT INTO `weshop_area` VALUES ('192', '1', '海淀', 'haidian');
INSERT INTO `weshop_area` VALUES ('193', '11', '南京', 'nanjing');
INSERT INTO `weshop_area` VALUES ('194', '3', '东丽', 'dongli');
INSERT INTO `weshop_area` VALUES ('195', '12', '杭州', 'hangzhou');
INSERT INTO `weshop_area` VALUES ('196', '18', '武汉', 'wuhan');
INSERT INTO `weshop_area` VALUES ('197', '5', '石家庄', 'shijiazhuang');
INSERT INTO `weshop_area` VALUES ('198', '8', '沈阳', 'shenyang');
INSERT INTO `weshop_area` VALUES ('199', '27', '西安', 'xian');
INSERT INTO `weshop_area` VALUES ('200', '1', '昌平', 'changping');
INSERT INTO `weshop_area` VALUES ('201', '17', '郑州', 'zhengzhou');
INSERT INTO `weshop_area` VALUES ('202', '25', '昆明', 'kunming');
INSERT INTO `weshop_area` VALUES ('203', '9', '长春', 'changchun');
INSERT INTO `weshop_area` VALUES ('204', '10', '哈尔滨', 'haerbin');
INSERT INTO `weshop_area` VALUES ('205', '20', '中山', 'zhongshan');
INSERT INTO `weshop_area` VALUES ('206', '16', '济南', 'jinan');
INSERT INTO `weshop_area` VALUES ('207', '11', '苏州', 'suzhou');
INSERT INTO `weshop_area` VALUES ('208', '8', '大连', 'dalian');
INSERT INTO `weshop_area` VALUES ('209', '20', '江门', 'jiangmen');
INSERT INTO `weshop_area` VALUES ('210', '19', '长沙', 'changsha');
INSERT INTO `weshop_area` VALUES ('211', '16', '青岛', 'qingdao');
INSERT INTO `weshop_area` VALUES ('212', '13', '蚌埠', 'bengbu');
INSERT INTO `weshop_area` VALUES ('213', '14', '厦门', 'xiamen');
INSERT INTO `weshop_area` VALUES ('214', '14', '福州', 'fuzhou');
INSERT INTO `weshop_area` VALUES ('215', '6', '太原', 'taiyuan');
INSERT INTO `weshop_area` VALUES ('216', '13', '合肥', 'hefei');
INSERT INTO `weshop_area` VALUES ('217', '12', '温州', 'wenzhou');
INSERT INTO `weshop_area` VALUES ('218', '16', '潍坊', 'weifang');
INSERT INTO `weshop_area` VALUES ('219', '1', '西城', 'xicheng');
INSERT INTO `weshop_area` VALUES ('220', '10', '大庆', 'daqing');
INSERT INTO `weshop_area` VALUES ('221', '8', '鞍山', 'anshan');
INSERT INTO `weshop_area` VALUES ('222', '7', '呼和浩特', 'huhehaote');
INSERT INTO `weshop_area` VALUES ('223', '1', '大兴', 'daxing');
INSERT INTO `weshop_area` VALUES ('224', '1', '通州', 'tongzhou');
INSERT INTO `weshop_area` VALUES ('225', '14', '泉州', 'quanzhou');
INSERT INTO `weshop_area` VALUES ('226', '16', '枣庄', 'zaozhuang');
INSERT INTO `weshop_area` VALUES ('227', '21', '南宁', 'nanning');
INSERT INTO `weshop_area` VALUES ('228', '11', '无锡', 'wuxi');
INSERT INTO `weshop_area` VALUES ('229', '5', '唐山', 'tangshan');
INSERT INTO `weshop_area` VALUES ('230', '11', '徐州', 'xuzhou');
INSERT INTO `weshop_area` VALUES ('231', '7', '包头', 'baotou');
INSERT INTO `weshop_area` VALUES ('232', '1', '东城', 'dongcheng');
INSERT INTO `weshop_area` VALUES ('233', '4', '南岸', 'nanan2');
INSERT INTO `weshop_area` VALUES ('234', '22', '海口', 'haikou');
INSERT INTO `weshop_area` VALUES ('235', '11', '宿迁', 'suqian');
INSERT INTO `weshop_area` VALUES ('236', '16', '临沂', 'linyi');
INSERT INTO `weshop_area` VALUES ('237', '2', '闵行', 'minhang');
INSERT INTO `weshop_area` VALUES ('238', '11', '南通', 'nantong');
INSERT INTO `weshop_area` VALUES ('240', '24', '贵阳', 'guiyang');
INSERT INTO `weshop_area` VALUES ('241', '3', '河东', 'hedong');
INSERT INTO `weshop_area` VALUES ('242', '2', '浦东', 'pudong');
INSERT INTO `weshop_area` VALUES ('244', '16', '淄博', 'zibo');
INSERT INTO `weshop_area` VALUES ('245', '16', '济宁', 'jining');
INSERT INTO `weshop_area` VALUES ('246', '11', '常州', 'changzhou');
INSERT INTO `weshop_area` VALUES ('247', '11', '淮安', 'huaian');
INSERT INTO `weshop_area` VALUES ('248', '1', '宣武', 'xuanwu');
INSERT INTO `weshop_area` VALUES ('249', '1', '石景山', 'shijingshan');
INSERT INTO `weshop_area` VALUES ('250', '5', '保定', 'baoding');
INSERT INTO `weshop_area` VALUES ('251', '4', '江北', 'jiangbei');
INSERT INTO `weshop_area` VALUES ('252', '16', '聊城', 'liaocheng');
INSERT INTO `weshop_area` VALUES ('253', '28', '兰州', 'lanzhou');
INSERT INTO `weshop_area` VALUES ('254', '5', '邯郸', 'handan');
INSERT INTO `weshop_area` VALUES ('255', '5', '沧州', 'cangzhou');
INSERT INTO `weshop_area` VALUES ('256', '12', '金华', 'jinhua');
INSERT INTO `weshop_area` VALUES ('257', '11', '盐城', 'yancheng');
INSERT INTO `weshop_area` VALUES ('258', '19', '衡阳', 'hengyang');
INSERT INTO `weshop_area` VALUES ('259', '11', '泰州', 'taizhou');
INSERT INTO `weshop_area` VALUES ('261', '4', '九龙坡', 'jiulongpo');
INSERT INTO `weshop_area` VALUES ('262', '9', '吉林', 'jilin2');
INSERT INTO `weshop_area` VALUES ('263', '17', '新乡', 'xinxiang');
INSERT INTO `weshop_area` VALUES ('264', '5', '廊坊', 'langfang');
INSERT INTO `weshop_area` VALUES ('265', '8', '抚顺', 'fushun');
INSERT INTO `weshop_area` VALUES ('266', '23', '绵阳', 'mianyang');
INSERT INTO `weshop_area` VALUES ('267', '11', '连云港', 'lianyungang');
INSERT INTO `weshop_area` VALUES ('268', '17', '焦作', 'jiaozuo');
INSERT INTO `weshop_area` VALUES ('269', '5', '邢台', 'xingtai');
INSERT INTO `weshop_area` VALUES ('270', '3', '塘沽', 'tanggu');
INSERT INTO `weshop_area` VALUES ('271', '8', '盘锦', 'panjin');
INSERT INTO `weshop_area` VALUES ('272', '17', '南阳', 'nanyang');
INSERT INTO `weshop_area` VALUES ('273', '8', '葫芦岛', 'huludao');
INSERT INTO `weshop_area` VALUES ('274', '20', '阳江', 'yangjiang');
INSERT INTO `weshop_area` VALUES ('275', '8', '丹东', 'dandong');
INSERT INTO `weshop_area` VALUES ('276', '16', '泰安', 'taian');
INSERT INTO `weshop_area` VALUES ('277', '17', '许昌', 'xuchang');
INSERT INTO `weshop_area` VALUES ('278', '16', '东营', 'dongying');
INSERT INTO `weshop_area` VALUES ('279', '17', '洛阳', 'luoyang');
INSERT INTO `weshop_area` VALUES ('281', '14', '莆田', 'putian');
INSERT INTO `weshop_area` VALUES ('282', '3', '南开', 'nankai');
INSERT INTO `weshop_area` VALUES ('283', '16', '威海', 'weihai');
INSERT INTO `weshop_area` VALUES ('284', '20', '珠海', 'zhuhai');
INSERT INTO `weshop_area` VALUES ('285', '18', '襄阳', 'xiangyang');
INSERT INTO `weshop_area` VALUES ('286', '5', '衡水', 'hengshui');
INSERT INTO `weshop_area` VALUES ('287', '12', '嘉兴', 'jiaxing');
INSERT INTO `weshop_area` VALUES ('288', '17', '濮阳', 'puyang');
INSERT INTO `weshop_area` VALUES ('289', '23', '德阳', 'deyang');
INSERT INTO `weshop_area` VALUES ('290', '16', '滨州', 'binzhou');
INSERT INTO `weshop_area` VALUES ('291', '5', '秦皇岛', 'qinhuangdao');
INSERT INTO `weshop_area` VALUES ('292', '4', '渝中', 'yuzhong');
INSERT INTO `weshop_area` VALUES ('293', '1', '崇文', 'chongwen');
INSERT INTO `weshop_area` VALUES ('294', '1', '顺义', 'shunyi');
INSERT INTO `weshop_area` VALUES ('295', '12', '绍兴', 'shaoxing');
INSERT INTO `weshop_area` VALUES ('296', '18', '荆州', 'jingzhou');
INSERT INTO `weshop_area` VALUES ('297', '15', '南昌', 'nanchang');
INSERT INTO `weshop_area` VALUES ('298', '16', '德州', 'dezhou');
INSERT INTO `weshop_area` VALUES ('299', '6', '临汾', 'linfen');
INSERT INTO `weshop_area` VALUES ('300', '17', '周口', 'zhoukou');
INSERT INTO `weshop_area` VALUES ('301', '11', '扬州', 'yangzhou');
INSERT INTO `weshop_area` VALUES ('302', '20', '惠州', 'huizhou');
INSERT INTO `weshop_area` VALUES ('303', '10', '佳木斯', 'jiamusi');
INSERT INTO `weshop_area` VALUES ('304', '20', '揭阳', 'jieyang');
INSERT INTO `weshop_area` VALUES ('305', '29', '银川', 'yinchuan');
INSERT INTO `weshop_area` VALUES ('306', '17', '开封', 'kaifeng');
INSERT INTO `weshop_area` VALUES ('307', '1', '房山', 'fangshan');
INSERT INTO `weshop_area` VALUES ('308', '8', '营口', 'yingkou');
INSERT INTO `weshop_area` VALUES ('309', '11', '镇江', 'zhenjiang');
INSERT INTO `weshop_area` VALUES ('310', '3', '河西', 'hexi');
INSERT INTO `weshop_area` VALUES ('311', '16', '菏泽', 'heze');
INSERT INTO `weshop_area` VALUES ('312', '7', '鄂尔多斯', 'eerduosi');
INSERT INTO `weshop_area` VALUES ('313', '16', '日照', 'rizhao');
INSERT INTO `weshop_area` VALUES ('314', '2', '徐汇', 'xuhui');
INSERT INTO `weshop_area` VALUES ('315', '19', '永州', 'yongzhou');
INSERT INTO `weshop_area` VALUES ('316', '15', '上饶', 'shangrao');
INSERT INTO `weshop_area` VALUES ('317', '20', '汕头', 'shantou');
INSERT INTO `weshop_area` VALUES ('318', '25', '曲靖', 'qujing');
INSERT INTO `weshop_area` VALUES ('319', '21', '桂林', 'guilin');
INSERT INTO `weshop_area` VALUES ('320', '17', '商丘', 'shangqiu');
INSERT INTO `weshop_area` VALUES ('321', '18', '宜昌', 'yichang');
INSERT INTO `weshop_area` VALUES ('322', '7', '赤峰', 'chifeng');
INSERT INTO `weshop_area` VALUES ('323', '13', '芜湖', 'wuhu');
INSERT INTO `weshop_area` VALUES ('324', '7', '巴彦淖尔盟', 'bayannaoermeng');
INSERT INTO `weshop_area` VALUES ('325', '17', '安阳', 'anyang');
INSERT INTO `weshop_area` VALUES ('326', '3', '北辰', 'beichen');
INSERT INTO `weshop_area` VALUES ('327', '17', '平顶山', 'pingdingshan');
INSERT INTO `weshop_area` VALUES ('328', '4', '沙坪坝', 'shapingba');
INSERT INTO `weshop_area` VALUES ('329', '19', '常德', 'changde');
INSERT INTO `weshop_area` VALUES ('330', '19', '湘潭', 'xiangtan');
INSERT INTO `weshop_area` VALUES ('331', '2', '松江', 'songjiang');
INSERT INTO `weshop_area` VALUES ('332', '27', '咸阳', 'xianyang');
INSERT INTO `weshop_area` VALUES ('333', '13', '淮南', 'huainan');
INSERT INTO `weshop_area` VALUES ('334', '8', '辽阳', 'liaoyang');
INSERT INTO `weshop_area` VALUES ('335', '10', '齐齐哈尔', 'qiqihaer');
INSERT INTO `weshop_area` VALUES ('336', '15', '九江', 'jiujiang');
INSERT INTO `weshop_area` VALUES ('337', '2', '长宁', 'changning');
INSERT INTO `weshop_area` VALUES ('338', '3', '西青', 'xiqing');
INSERT INTO `weshop_area` VALUES ('339', '8', '锦州', 'jinzhou');
INSERT INTO `weshop_area` VALUES ('340', '2', '嘉定', 'jiading');
INSERT INTO `weshop_area` VALUES ('341', '19', '岳阳', 'yueyang');
INSERT INTO `weshop_area` VALUES ('342', '19', '株洲', 'zhuzhou');
INSERT INTO `weshop_area` VALUES ('343', '5', '张家口', 'zhangjiakou');
INSERT INTO `weshop_area` VALUES ('344', '10', '牡丹江', 'mudanjiang');
INSERT INTO `weshop_area` VALUES ('345', '4', '万州', 'wanzhou');
INSERT INTO `weshop_area` VALUES ('346', '14', '龙岩', 'longyan');
INSERT INTO `weshop_area` VALUES ('347', '12', '湖州', 'huzhou');
INSERT INTO `weshop_area` VALUES ('348', '19', '邵阳', 'shaoyang');
INSERT INTO `weshop_area` VALUES ('349', '16', '莱芜', 'laiwu');
INSERT INTO `weshop_area` VALUES ('350', '2', '宝山', 'baoshan2');
INSERT INTO `weshop_area` VALUES ('351', '27', '渭南', 'weinan');
INSERT INTO `weshop_area` VALUES ('352', '21', '柳州', 'liuzhou');
INSERT INTO `weshop_area` VALUES ('353', '6', '运城', 'yuncheng');
INSERT INTO `weshop_area` VALUES ('354', '13', '滁州', 'chuzhou');
INSERT INTO `weshop_area` VALUES ('355', '13', '阜阳', 'fuyang');
INSERT INTO `weshop_area` VALUES ('356', '2', '虹口', 'hongkou');
INSERT INTO `weshop_area` VALUES ('357', '6', '大同', 'datong');
INSERT INTO `weshop_area` VALUES ('358', '2', '杨浦', 'yangpu');
INSERT INTO `weshop_area` VALUES ('359', '14', '漳州', 'zhangzhou');
INSERT INTO `weshop_area` VALUES ('360', '6', '晋中', 'jinzhong');
INSERT INTO `weshop_area` VALUES ('361', '22', '三亚', 'sanya');
INSERT INTO `weshop_area` VALUES ('362', '9', '四平', 'siping');
INSERT INTO `weshop_area` VALUES ('363', '17', '信阳', 'xinyang');
INSERT INTO `weshop_area` VALUES ('364', '12', '丽水', 'lishui');
INSERT INTO `weshop_area` VALUES ('365', '13', '巢湖', 'chaohu');
INSERT INTO `weshop_area` VALUES ('366', '13', '宿州', 'suzhou2');
INSERT INTO `weshop_area` VALUES ('367', '6', '长治', 'changzhi');
INSERT INTO `weshop_area` VALUES ('368', '10', '绥化', 'suihua');
INSERT INTO `weshop_area` VALUES ('369', '15', '萍乡', 'pingxiang');
INSERT INTO `weshop_area` VALUES ('370', '3', '河北', 'hebei2');
INSERT INTO `weshop_area` VALUES ('371', '20', '肇庆', 'zhaoqing');
INSERT INTO `weshop_area` VALUES ('372', '20', '茂名', 'maoming');
INSERT INTO `weshop_area` VALUES ('373', '21', '玉林', 'yulin');
INSERT INTO `weshop_area` VALUES ('374', '13', '铜陵', 'tongling');
INSERT INTO `weshop_area` VALUES ('375', '27', '宝鸡', 'baoji');
INSERT INTO `weshop_area` VALUES ('377', '15', '宜春', 'yichun');
INSERT INTO `weshop_area` VALUES ('378', '30', '西宁', 'xining');
INSERT INTO `weshop_area` VALUES ('379', '31', '乌鲁木齐', 'wulumuqi');
INSERT INTO `weshop_area` VALUES ('380', '27', '榆林', 'yulin2');
INSERT INTO `weshop_area` VALUES ('381', '18', '十堰', 'shiyan');
INSERT INTO `weshop_area` VALUES ('382', '13', '黄山', 'huangshan');
INSERT INTO `weshop_area` VALUES ('383', '18', '荆门', 'jingmen');
INSERT INTO `weshop_area` VALUES ('384', '13', '六安', 'luan');
INSERT INTO `weshop_area` VALUES ('385', '20', '清远', 'qingyuan');
INSERT INTO `weshop_area` VALUES ('386', '18', '黄冈', 'huanggang');
INSERT INTO `weshop_area` VALUES ('387', '19', '娄底', 'loudi');
INSERT INTO `weshop_area` VALUES ('388', '15', '赣州', 'ganzhou');
INSERT INTO `weshop_area` VALUES ('389', '23', '南充', 'nanchong');
INSERT INTO `weshop_area` VALUES ('390', '20', '广州', 'guangzhou');
INSERT INTO `weshop_area` VALUES ('391', '16', '烟台', 'yantai');
INSERT INTO `weshop_area` VALUES ('392', '2', '闸北', 'zhabei');
INSERT INTO `weshop_area` VALUES ('394', '14', '宁德', 'ningde');
INSERT INTO `weshop_area` VALUES ('398', '1', '门头沟', 'mentougou');
INSERT INTO `weshop_area` VALUES ('399', '1', '平谷', 'pinggu');
INSERT INTO `weshop_area` VALUES ('400', '1', '怀柔', 'huairou');
INSERT INTO `weshop_area` VALUES ('401', '1', '密云', 'miyun');
INSERT INTO `weshop_area` VALUES ('402', '1', '延庆', 'yanqing');
INSERT INTO `weshop_area` VALUES ('403', '2', '黄埔', 'huangpu');
INSERT INTO `weshop_area` VALUES ('405', '2', '卢湾', 'luwan');
INSERT INTO `weshop_area` VALUES ('406', '2', '静安', 'jingan');
INSERT INTO `weshop_area` VALUES ('407', '2', '金山', 'jinshan');
INSERT INTO `weshop_area` VALUES ('408', '2', '青浦', 'qingpu');
INSERT INTO `weshop_area` VALUES ('409', '2', '南汇', 'nanhui');
INSERT INTO `weshop_area` VALUES ('410', '2', '奉贤', 'fengxian');
INSERT INTO `weshop_area` VALUES ('411', '2', '崇明', 'chongming');
INSERT INTO `weshop_area` VALUES ('412', '3', '和平', 'heping');
INSERT INTO `weshop_area` VALUES ('413', '3', '津南', 'jinnan');
INSERT INTO `weshop_area` VALUES ('414', '3', '武清', 'wuqing');
INSERT INTO `weshop_area` VALUES ('415', '3', '红桥', 'hongqiao');
INSERT INTO `weshop_area` VALUES ('416', '3', '汉沽', 'hangu');
INSERT INTO `weshop_area` VALUES ('417', '3', '大港', 'dagang');
INSERT INTO `weshop_area` VALUES ('418', '3', '宁河', 'ninghe');
INSERT INTO `weshop_area` VALUES ('419', '3', '静海', 'jinghai');
INSERT INTO `weshop_area` VALUES ('420', '3', '宝坻', 'baodi');
INSERT INTO `weshop_area` VALUES ('421', '3', '蓟县', 'jixian');
INSERT INTO `weshop_area` VALUES ('422', '4', '涪陵', 'fuling');
INSERT INTO `weshop_area` VALUES ('424', '4', '大渡口', 'dadukou');
INSERT INTO `weshop_area` VALUES ('425', '4', '北碚', 'beibei');
INSERT INTO `weshop_area` VALUES ('426', '4', '万盛', 'wansheng');
INSERT INTO `weshop_area` VALUES ('427', '4', '双桥', 'shuangqiao');
INSERT INTO `weshop_area` VALUES ('428', '4', '渝北', 'yubei');
INSERT INTO `weshop_area` VALUES ('429', '4', '巴南', 'banan');
INSERT INTO `weshop_area` VALUES ('430', '4', '黔江', 'qianjiang2');
INSERT INTO `weshop_area` VALUES ('431', '4', '长寿', 'changshou');
INSERT INTO `weshop_area` VALUES ('432', '4', '綦江', 'qijiang');
INSERT INTO `weshop_area` VALUES ('433', '4', '潼南', 'tongnan');
INSERT INTO `weshop_area` VALUES ('434', '4', '铜梁', 'tongliang');
INSERT INTO `weshop_area` VALUES ('435', '4', '大足', 'dazu');
INSERT INTO `weshop_area` VALUES ('436', '4', '荣昌', 'rongchang');
INSERT INTO `weshop_area` VALUES ('437', '4', '壁山', 'bishan');
INSERT INTO `weshop_area` VALUES ('438', '4', '梁平', 'liangping');
INSERT INTO `weshop_area` VALUES ('439', '4', '城口', 'chengkou');
INSERT INTO `weshop_area` VALUES ('440', '4', '丰都', 'fengdu');
INSERT INTO `weshop_area` VALUES ('441', '4', '垫江', 'dianjiang');
INSERT INTO `weshop_area` VALUES ('442', '4', '武隆', 'wulong');
INSERT INTO `weshop_area` VALUES ('443', '4', '忠县', 'zhongxian');
INSERT INTO `weshop_area` VALUES ('444', '4', '开县', 'kaixian');
INSERT INTO `weshop_area` VALUES ('445', '4', '云阳', 'yunyang');
INSERT INTO `weshop_area` VALUES ('446', '4', '奉节', 'fengjie');
INSERT INTO `weshop_area` VALUES ('447', '4', '巫山', 'wushan');
INSERT INTO `weshop_area` VALUES ('448', '4', '巫溪', 'wuxi2');
INSERT INTO `weshop_area` VALUES ('449', '4', '石柱', 'shizhu');
INSERT INTO `weshop_area` VALUES ('450', '4', '秀山', 'xiushan');
INSERT INTO `weshop_area` VALUES ('451', '4', '酉阳', 'youyang');
INSERT INTO `weshop_area` VALUES ('452', '4', '彭水', 'pengshui');
INSERT INTO `weshop_area` VALUES ('453', '4', '江津', 'jiangjin');
INSERT INTO `weshop_area` VALUES ('454', '4', '合川', 'hechuan');
INSERT INTO `weshop_area` VALUES ('455', '4', '永川', 'yongchuan');
INSERT INTO `weshop_area` VALUES ('456', '4', '南川', 'nanchuan');
INSERT INTO `weshop_area` VALUES ('457', '5', '承德', 'chengde');
INSERT INTO `weshop_area` VALUES ('458', '5', '任丘', 'renqiu');
INSERT INTO `weshop_area` VALUES ('459', '5', '迁安', 'qianan');
INSERT INTO `weshop_area` VALUES ('460', '5', '辛集', 'xinji');
INSERT INTO `weshop_area` VALUES ('461', '5', '玉田', 'yutian');
INSERT INTO `weshop_area` VALUES ('462', '5', '永清', 'yongqing');
INSERT INTO `weshop_area` VALUES ('463', '5', '涿州', 'zhuozhou');
INSERT INTO `weshop_area` VALUES ('464', '5', '遵化', 'zunhua');
INSERT INTO `weshop_area` VALUES ('465', '5', '大厂', 'dachang');
INSERT INTO `weshop_area` VALUES ('466', '5', '乐亭', 'leting');
INSERT INTO `weshop_area` VALUES ('467', '5', '兴隆', 'xinglong');
INSERT INTO `weshop_area` VALUES ('468', '6', '阳泉', 'yangquan');
INSERT INTO `weshop_area` VALUES ('469', '6', '晋城', 'jincheng');
INSERT INTO `weshop_area` VALUES ('470', '6', '朔州', 'shuozhou');
INSERT INTO `weshop_area` VALUES ('471', '6', '吕梁', 'lvliang');
INSERT INTO `weshop_area` VALUES ('472', '6', '忻州', 'xinzhou');
INSERT INTO `weshop_area` VALUES ('480', '6', '榆次', 'yuci');
INSERT INTO `weshop_area` VALUES ('481', '6', '孝义', 'xiaoyi');
INSERT INTO `weshop_area` VALUES ('482', '6', '介休', 'jiexiu');
INSERT INTO `weshop_area` VALUES ('483', '6', '离石', 'lishi');
INSERT INTO `weshop_area` VALUES ('484', '6', '河津', 'hejin');
INSERT INTO `weshop_area` VALUES ('485', '6', '汾阳', 'fenyang');
INSERT INTO `weshop_area` VALUES ('486', '6', '侯马', 'houma');
INSERT INTO `weshop_area` VALUES ('487', '7', '乌海', 'wuhai');
INSERT INTO `weshop_area` VALUES ('488', '7', '呼伦贝尔盟', 'hulunbeiermeng');
INSERT INTO `weshop_area` VALUES ('489', '7', '阿拉善盟', 'alashanmeng');
INSERT INTO `weshop_area` VALUES ('490', '7', '哲里木盟', 'zhelimumeng');
INSERT INTO `weshop_area` VALUES ('491', '7', '兴安盟', 'xinganmeng');
INSERT INTO `weshop_area` VALUES ('492', '7', '乌兰察布盟', 'wulanchabumeng');
INSERT INTO `weshop_area` VALUES ('493', '7', '锡林郭勒盟', 'xilinguolemeng');
INSERT INTO `weshop_area` VALUES ('494', '7', '通辽', 'tongliao');
INSERT INTO `weshop_area` VALUES ('495', '7', '海拉尔', 'hailaer');
INSERT INTO `weshop_area` VALUES ('496', '7', '临河', 'linhe');
INSERT INTO `weshop_area` VALUES ('497', '7', '呼市', 'hushi');
INSERT INTO `weshop_area` VALUES ('498', '7', '集宁', 'jining2');
INSERT INTO `weshop_area` VALUES ('499', '7', '牙克石', 'yakeshi');
INSERT INTO `weshop_area` VALUES ('500', '7', '乌兰浩特', 'wulanhaote');
INSERT INTO `weshop_area` VALUES ('501', '7', '锡林浩特', 'xilinhaote');
INSERT INTO `weshop_area` VALUES ('502', '8', '本溪', 'benxi');
INSERT INTO `weshop_area` VALUES ('503', '8', '阜新', 'fuxin');
INSERT INTO `weshop_area` VALUES ('504', '8', '铁岭', 'tieling');
INSERT INTO `weshop_area` VALUES ('505', '8', '海城', 'haicheng');
INSERT INTO `weshop_area` VALUES ('506', '8', '大石桥', 'dashiqiao');
INSERT INTO `weshop_area` VALUES ('507', '8', '辽河', 'liaohe');
INSERT INTO `weshop_area` VALUES ('508', '8', '瓦房店', 'wafangdian');
INSERT INTO `weshop_area` VALUES ('509', '9', '辽源', 'liaoyuan');
INSERT INTO `weshop_area` VALUES ('510', '9', '通化', 'tonghua');
INSERT INTO `weshop_area` VALUES ('511', '9', '白山', 'baishan');
INSERT INTO `weshop_area` VALUES ('512', '9', '松原', 'songyuan');
INSERT INTO `weshop_area` VALUES ('513', '9', '白城', 'baicheng');
INSERT INTO `weshop_area` VALUES ('514', '9', '延吉', 'yanji');
INSERT INTO `weshop_area` VALUES ('515', '9', '长岭', 'changling');
INSERT INTO `weshop_area` VALUES ('516', '9', '梅河口', 'meihekou');
INSERT INTO `weshop_area` VALUES ('517', '9', '靖宇', 'jingyu');
INSERT INTO `weshop_area` VALUES ('518', '9', '双辽', 'shuangliao');
INSERT INTO `weshop_area` VALUES ('519', '9', '扶余', 'fuyu');
INSERT INTO `weshop_area` VALUES ('520', '9', '顺达', 'shunda');
INSERT INTO `weshop_area` VALUES ('521', '10', '鹤岗', 'hegang');
INSERT INTO `weshop_area` VALUES ('522', '10', '鸡西', 'jixi');
INSERT INTO `weshop_area` VALUES ('523', '10', '黑河', 'heihe');
INSERT INTO `weshop_area` VALUES ('524', '10', '双鸭山', 'shuangyashan');
INSERT INTO `weshop_area` VALUES ('525', '10', '伊春', 'yichun2');
INSERT INTO `weshop_area` VALUES ('526', '10', '七台河', 'qitaihe');
INSERT INTO `weshop_area` VALUES ('527', '10', '大兴安岭', 'daxinganling');
INSERT INTO `weshop_area` VALUES ('528', '10', '北安', 'beian');
INSERT INTO `weshop_area` VALUES ('529', '10', '齐市', 'qishi');
INSERT INTO `weshop_area` VALUES ('530', '10', '铁力', 'tieli');
INSERT INTO `weshop_area` VALUES ('531', '10', '嫩江', 'nenjiang');
INSERT INTO `weshop_area` VALUES ('532', '10', '南岗', 'nangang');
INSERT INTO `weshop_area` VALUES ('533', '10', '尚志', 'shangzhi');
INSERT INTO `weshop_area` VALUES ('534', '10', '绥芬河', 'suifenhe');
INSERT INTO `weshop_area` VALUES ('535', '10', '加格达奇', 'jiagedaqi');
INSERT INTO `weshop_area` VALUES ('536', '11', '常熟', 'changshu');
INSERT INTO `weshop_area` VALUES ('537', '11', '丹阳', 'danyang');
INSERT INTO `weshop_area` VALUES ('538', '11', '江阴', 'jiangyin');
INSERT INTO `weshop_area` VALUES ('539', '11', '昆山', 'kunshan');
INSERT INTO `weshop_area` VALUES ('540', '11', '张家港', 'zhangjiagang');
INSERT INTO `weshop_area` VALUES ('541', '11', '泰兴', 'taixing');
INSERT INTO `weshop_area` VALUES ('542', '11', '吴江', 'wujiang');
INSERT INTO `weshop_area` VALUES ('543', '11', '太仓', 'taicang');
INSERT INTO `weshop_area` VALUES ('544', '11', '仪征', 'yizheng');
INSERT INTO `weshop_area` VALUES ('545', '11', '宜兴', 'yixing');
INSERT INTO `weshop_area` VALUES ('546', '11', '海安', 'haian');
INSERT INTO `weshop_area` VALUES ('547', '11', '靖江', 'jingjiang');
INSERT INTO `weshop_area` VALUES ('548', '11', '江宁', 'jiangning');
INSERT INTO `weshop_area` VALUES ('549', '11', '江都', 'jiangdu');
INSERT INTO `weshop_area` VALUES ('550', '11', '淮阴', 'huaiyin');
INSERT INTO `weshop_area` VALUES ('571', '32', '拉萨', 'lasa');
INSERT INTO `weshop_area` VALUES ('572', '32', '日喀则', 'rikaze');
INSERT INTO `weshop_area` VALUES ('573', '32', '山南', 'shannan');
INSERT INTO `weshop_area` VALUES ('574', '32', '林芝', 'linzhi');
INSERT INTO `weshop_area` VALUES ('575', '32', '昌都', 'changdu');
INSERT INTO `weshop_area` VALUES ('576', '32', '阿里', 'ali');
INSERT INTO `weshop_area` VALUES ('577', '32', '那曲', 'naqu');
INSERT INTO `weshop_area` VALUES ('583', '12', '衢州', 'quzhou');
INSERT INTO `weshop_area` VALUES ('584', '12', '舟山', 'zhoushan');
INSERT INTO `weshop_area` VALUES ('585', '12', '黄岩', 'huangyan');
INSERT INTO `weshop_area` VALUES ('586', '12', '乐清', 'yueqing');
INSERT INTO `weshop_area` VALUES ('587', '12', '东阳', 'dongyang');
INSERT INTO `weshop_area` VALUES ('588', '12', '瑞安', 'ruian');
INSERT INTO `weshop_area` VALUES ('589', '12', '平阳', 'pingyang');
INSERT INTO `weshop_area` VALUES ('590', '12', '萧山', 'xiaoshan');
INSERT INTO `weshop_area` VALUES ('591', '12', '永康', 'yongkang');
INSERT INTO `weshop_area` VALUES ('592', '12', '义乌', 'yiwu');
INSERT INTO `weshop_area` VALUES ('593', '12', '长兴', 'changxing');
INSERT INTO `weshop_area` VALUES ('594', '12', '诸暨', 'zhuji');
INSERT INTO `weshop_area` VALUES ('595', '12', '玉环', 'yuhuan');
INSERT INTO `weshop_area` VALUES ('596', '12', '余杭', 'yuhang');
INSERT INTO `weshop_area` VALUES ('597', '12', '余姚', 'yuyao');
INSERT INTO `weshop_area` VALUES ('598', '12', '永嘉', 'yongjia');
INSERT INTO `weshop_area` VALUES ('599', '12', '嵊州', 'shengzhou');
INSERT INTO `weshop_area` VALUES ('600', '12', '上虞', 'shangyu');
INSERT INTO `weshop_area` VALUES ('601', '12', '温岭', 'wenling');
INSERT INTO `weshop_area` VALUES ('602', '12', '桐庐', 'tonglu');
INSERT INTO `weshop_area` VALUES ('603', '12', '天台', 'tiantai');
INSERT INTO `weshop_area` VALUES ('604', '12', '建德', 'jiande');
INSERT INTO `weshop_area` VALUES ('605', '12', '浒山', 'hushan');
INSERT INTO `weshop_area` VALUES ('606', '12', '康桥', 'kangqiao');
INSERT INTO `weshop_area` VALUES ('607', '12', '临安', 'linan');
INSERT INTO `weshop_area` VALUES ('608', '12', '龙游', 'longyou');
INSERT INTO `weshop_area` VALUES ('609', '12', '临海', 'linhai');
INSERT INTO `weshop_area` VALUES ('610', '12', '德清', 'deqing');
INSERT INTO `weshop_area` VALUES ('611', '12', '富阳', 'fuyang2');
INSERT INTO `weshop_area` VALUES ('612', '12', '苍南', 'cangnan');
INSERT INTO `weshop_area` VALUES ('613', '12', '安吉', 'anji');
INSERT INTO `weshop_area` VALUES ('614', '12', '慈溪', 'cixi');
INSERT INTO `weshop_area` VALUES ('615', '13', '马鞍山', 'maanshan');
INSERT INTO `weshop_area` VALUES ('616', '13', '淮北', 'huaibei');
INSERT INTO `weshop_area` VALUES ('617', '13', '安庆', 'anqing');
INSERT INTO `weshop_area` VALUES ('618', '13', '池州', 'chizhou');
INSERT INTO `weshop_area` VALUES ('619', '13', '宣城', 'xuancheng');
INSERT INTO `weshop_area` VALUES ('620', '13', '亳州', 'bozhou');
INSERT INTO `weshop_area` VALUES ('621', '14', '三明', 'sanming');
INSERT INTO `weshop_area` VALUES ('622', '14', '南平', 'nanping');
INSERT INTO `weshop_area` VALUES ('623', '14', '晋江', 'jinjiang');
INSERT INTO `weshop_area` VALUES ('624', '14', '邵武', 'shaowu');
INSERT INTO `weshop_area` VALUES ('625', '14', '武夷山', 'wuyishan');
INSERT INTO `weshop_area` VALUES ('626', '14', '沙县', 'shaxian');
INSERT INTO `weshop_area` VALUES ('627', '14', '永安', 'yongan');
INSERT INTO `weshop_area` VALUES ('628', '14', '建瓯', 'jianou');
INSERT INTO `weshop_area` VALUES ('629', '14', '南安', 'nanan');
INSERT INTO `weshop_area` VALUES ('630', '14', '浦城', 'pucheng');
INSERT INTO `weshop_area` VALUES ('631', '14', '福清', 'fuqing');
INSERT INTO `weshop_area` VALUES ('632', '15', '景德镇', 'jingdezhen');
INSERT INTO `weshop_area` VALUES ('633', '15', '鹰潭', 'yingtan');
INSERT INTO `weshop_area` VALUES ('635', '15', '新馀', 'xinyu');
INSERT INTO `weshop_area` VALUES ('636', '15', '吉安', 'jian');
INSERT INTO `weshop_area` VALUES ('637', '15', '抚州', 'fuzhou2');
INSERT INTO `weshop_area` VALUES ('638', '15', '赣南', 'gannan');
INSERT INTO `weshop_area` VALUES ('639', '16', '招远', 'zhaoyuan');
INSERT INTO `weshop_area` VALUES ('640', '16', '高密', 'gaomi');
INSERT INTO `weshop_area` VALUES ('641', '16', '龙口', 'longkou');
INSERT INTO `weshop_area` VALUES ('642', '16', '蔡州', 'caizhou');
INSERT INTO `weshop_area` VALUES ('643', '16', '青州', 'qingzhou');
INSERT INTO `weshop_area` VALUES ('644', '15', '荣城', 'rongcheng');
INSERT INTO `weshop_area` VALUES ('645', '16', '寿光', 'shouguang');
INSERT INTO `weshop_area` VALUES ('646', '16', '文登', 'wendeng');
INSERT INTO `weshop_area` VALUES ('647', '16', '滕州', 'tengzhou');
INSERT INTO `weshop_area` VALUES ('648', '16', '沂水', 'yishui');
INSERT INTO `weshop_area` VALUES ('649', '16', '平度', 'pingdu');
INSERT INTO `weshop_area` VALUES ('650', '16', '即墨', 'jimo');
INSERT INTO `weshop_area` VALUES ('651', '16', '胶南', 'jiaonan');
INSERT INTO `weshop_area` VALUES ('652', '16', '莱西', 'laixi');
INSERT INTO `weshop_area` VALUES ('653', '16', '莱阳', 'laiyang');
INSERT INTO `weshop_area` VALUES ('654', '17', '鹤壁', 'hebi');
INSERT INTO `weshop_area` VALUES ('655', '17', '漯河', 'luohe');
INSERT INTO `weshop_area` VALUES ('656', '17', '三门峡', 'sanmenxia');
INSERT INTO `weshop_area` VALUES ('657', '17', '驻马店', 'zhumadian');
INSERT INTO `weshop_area` VALUES ('658', '17', '济源', 'jiyuan');
INSERT INTO `weshop_area` VALUES ('659', '17', '林州', 'linzhou');
INSERT INTO `weshop_area` VALUES ('660', '17', '新郑', 'xinzheng');
INSERT INTO `weshop_area` VALUES ('661', '18', '黄石', 'huangshi');
INSERT INTO `weshop_area` VALUES ('662', '18', '恩施', 'enshi');
INSERT INTO `weshop_area` VALUES ('663', '18', '潜江', 'qianjiang');
INSERT INTO `weshop_area` VALUES ('664', '18', '天门', 'tianmen');
INSERT INTO `weshop_area` VALUES ('665', '18', '仙桃', 'xiantao');
INSERT INTO `weshop_area` VALUES ('666', '18', '随州', 'suizhou');
INSERT INTO `weshop_area` VALUES ('667', '18', '咸宁', 'xianning');
INSERT INTO `weshop_area` VALUES ('668', '18', '孝感', 'xiaogan');
INSERT INTO `weshop_area` VALUES ('669', '18', '鄂州', 'ezhou');
INSERT INTO `weshop_area` VALUES ('671', '18', '利川', 'lichuan');
INSERT INTO `weshop_area` VALUES ('672', '19', '益阳', 'yiyang');
INSERT INTO `weshop_area` VALUES ('673', '19', '怀化', 'huaihua');
INSERT INTO `weshop_area` VALUES ('674', '19', '郴州', 'chenzhou');
INSERT INTO `weshop_area` VALUES ('675', '19', '湘西', 'xiangxi');
INSERT INTO `weshop_area` VALUES ('676', '19', '张家界', 'zhangjiajie');
INSERT INTO `weshop_area` VALUES ('677', '19', '马王堆', 'mawangdui');
INSERT INTO `weshop_area` VALUES ('678', '19', '吉首', 'jishou');
INSERT INTO `weshop_area` VALUES ('679', '19', '浏阳', 'liuyang');
INSERT INTO `weshop_area` VALUES ('680', '19', '邵东', 'shaodong');
INSERT INTO `weshop_area` VALUES ('681', '20', '韶关', 'shaoguan');
INSERT INTO `weshop_area` VALUES ('682', '20', '湛江', 'zhanjiang');
INSERT INTO `weshop_area` VALUES ('683', '20', '梅州', 'meizhou');
INSERT INTO `weshop_area` VALUES ('684', '20', '汕尾', 'shanwei');
INSERT INTO `weshop_area` VALUES ('685', '20', '河源', 'heyuan');
INSERT INTO `weshop_area` VALUES ('686', '20', '潮州', 'chaozhou');
INSERT INTO `weshop_area` VALUES ('687', '20', '云浮', 'yunfu');
INSERT INTO `weshop_area` VALUES ('688', '20', '端州', 'duanzhou');
INSERT INTO `weshop_area` VALUES ('689', '20', '开平', 'kaiping');
INSERT INTO `weshop_area` VALUES ('691', '20', '台山', 'taishan');
INSERT INTO `weshop_area` VALUES ('692', '20', '普宁', 'puning');
INSERT INTO `weshop_area` VALUES ('694', '20', '粤东', 'yuedong');
INSERT INTO `weshop_area` VALUES ('695', '20', '英德', 'yingde');
INSERT INTO `weshop_area` VALUES ('696', '20', '新会', 'xinhui');
INSERT INTO `weshop_area` VALUES ('697', '20', '阳春', 'yangchun');
INSERT INTO `weshop_area` VALUES ('698', '20', '揭西', 'jiexi');
INSERT INTO `weshop_area` VALUES ('699', '20', '流沙', 'liusha');
INSERT INTO `weshop_area` VALUES ('700', '20', '鹤山', 'heshan');
INSERT INTO `weshop_area` VALUES ('701', '20', '高要', 'gaoyao');
INSERT INTO `weshop_area` VALUES ('702', '20', '恩平', 'enping');
INSERT INTO `weshop_area` VALUES ('704', '20', '澄海', 'chenghai');
INSERT INTO `weshop_area` VALUES ('705', '20', '揭东', 'jiedong');
INSERT INTO `weshop_area` VALUES ('706', '21', '梧州', 'wuzhou');
INSERT INTO `weshop_area` VALUES ('707', '21', '北海', 'beihai');
INSERT INTO `weshop_area` VALUES ('708', '21', '防城港', 'fangchenggang');
INSERT INTO `weshop_area` VALUES ('709', '21', '钦州', 'qinzhou');
INSERT INTO `weshop_area` VALUES ('710', '21', '贵港', 'guigang');
INSERT INTO `weshop_area` VALUES ('711', '21', '南宁地区', 'nanningdiqu');
INSERT INTO `weshop_area` VALUES ('712', '21', '柳州地区', 'liuzhoudiqu');
INSERT INTO `weshop_area` VALUES ('713', '21', '贺州', 'hezhou');
INSERT INTO `weshop_area` VALUES ('714', '21', '百色', 'baise');
INSERT INTO `weshop_area` VALUES ('715', '21', '河池', 'hechi');
INSERT INTO `weshop_area` VALUES ('716', '21', '宜州', 'yizhou');
INSERT INTO `weshop_area` VALUES ('717', '22', '琼海', 'qionghai');
INSERT INTO `weshop_area` VALUES ('718', '23', '自贡', 'zigong');
INSERT INTO `weshop_area` VALUES ('719', '23', '攀枝花', 'panzhihua');
INSERT INTO `weshop_area` VALUES ('720', '23', '广元', 'guangyuan');
INSERT INTO `weshop_area` VALUES ('721', '23', '内江', 'neijiang');
INSERT INTO `weshop_area` VALUES ('722', '23', '乐山', 'leshan');
INSERT INTO `weshop_area` VALUES ('723', '23', '宜宾', 'yibin');
INSERT INTO `weshop_area` VALUES ('724', '23', '广安', 'guangan');
INSERT INTO `weshop_area` VALUES ('725', '23', '达川', 'dachuan');
INSERT INTO `weshop_area` VALUES ('726', '23', '雅安', 'yaan');
INSERT INTO `weshop_area` VALUES ('727', '23', '眉山', 'meishan');
INSERT INTO `weshop_area` VALUES ('728', '23', '甘孜', 'ganzi');
INSERT INTO `weshop_area` VALUES ('729', '23', '凉山', 'liangshan');
INSERT INTO `weshop_area` VALUES ('730', '23', '泸州', 'luzhou');
INSERT INTO `weshop_area` VALUES ('731', '23', '遂宁', 'suining');
INSERT INTO `weshop_area` VALUES ('732', '23', '西昌', 'xichang');
INSERT INTO `weshop_area` VALUES ('733', '23', '资阳', 'ziyang');
INSERT INTO `weshop_area` VALUES ('734', '23', '峨眉山', 'emeishan');
INSERT INTO `weshop_area` VALUES ('735', '23', '巴中', 'bazhong');
INSERT INTO `weshop_area` VALUES ('736', '23', '绵竹', 'mianzhu');
INSERT INTO `weshop_area` VALUES ('737', '23', '荣县', 'rongxian');
INSERT INTO `weshop_area` VALUES ('738', '23', '武侯', 'wuhou');
INSERT INTO `weshop_area` VALUES ('739', '23', '阿坝', 'aba');
INSERT INTO `weshop_area` VALUES ('740', '24', '六盘水', 'liupanshui');
INSERT INTO `weshop_area` VALUES ('741', '24', '遵义', 'zunyi');
INSERT INTO `weshop_area` VALUES ('742', '24', '安顺', 'anshun');
INSERT INTO `weshop_area` VALUES ('743', '24', '铜仁', 'tongren');
INSERT INTO `weshop_area` VALUES ('744', '24', '黔东南', 'qiandongnan');
INSERT INTO `weshop_area` VALUES ('745', '24', '黔南', 'qiannan');
INSERT INTO `weshop_area` VALUES ('746', '24', '黔西南', 'qianxinan');
INSERT INTO `weshop_area` VALUES ('747', '24', '毕节', 'bijie');
INSERT INTO `weshop_area` VALUES ('748', '24', '兴义', 'xingyi');
INSERT INTO `weshop_area` VALUES ('749', '24', '都匀', 'duyun');
INSERT INTO `weshop_area` VALUES ('750', '24', '凯里', 'kaili');
INSERT INTO `weshop_area` VALUES ('751', '25', '大理', 'dali');
INSERT INTO `weshop_area` VALUES ('752', '25', '玉溪', 'yuxi');
INSERT INTO `weshop_area` VALUES ('753', '25', '昭通', 'zhaotong');
INSERT INTO `weshop_area` VALUES ('754', '25', '楚雄', 'chuxiong');
INSERT INTO `weshop_area` VALUES ('755', '25', '红河', 'honghe');
INSERT INTO `weshop_area` VALUES ('756', '25', '文山', 'wenshan');
INSERT INTO `weshop_area` VALUES ('757', '25', '思茅', 'simao');
INSERT INTO `weshop_area` VALUES ('758', '25', '西双版纳', 'xishuangbanna');
INSERT INTO `weshop_area` VALUES ('759', '25', '保山', 'baoshan');
INSERT INTO `weshop_area` VALUES ('760', '25', '德宏', 'dehong');
INSERT INTO `weshop_area` VALUES ('761', '25', '丽江', 'lijiang');
INSERT INTO `weshop_area` VALUES ('762', '25', '怒江', 'nujiang');
INSERT INTO `weshop_area` VALUES ('763', '25', '迪庆', 'diqing');
INSERT INTO `weshop_area` VALUES ('764', '25', '临沧', 'lincang');
INSERT INTO `weshop_area` VALUES ('765', '25', '开远', 'kaiyuan');
INSERT INTO `weshop_area` VALUES ('766', '25', '个旧', 'gejiu');
INSERT INTO `weshop_area` VALUES ('767', '25', '潞西', 'luxi');
INSERT INTO `weshop_area` VALUES ('768', '25', '州芒', 'zhoumang');
INSERT INTO `weshop_area` VALUES ('769', '27', '铜川', 'tongchuan');
INSERT INTO `weshop_area` VALUES ('770', '27', '延安', 'yanan');
INSERT INTO `weshop_area` VALUES ('771', '27', '汉中', 'hanzhong');
INSERT INTO `weshop_area` VALUES ('772', '27', '安康', 'ankang');
INSERT INTO `weshop_area` VALUES ('773', '27', '商洛', 'shangluo');
INSERT INTO `weshop_area` VALUES ('774', '27', '韩城', 'hancheng');
INSERT INTO `weshop_area` VALUES ('775', '28', '嘉峪关', 'jiayuguan');
INSERT INTO `weshop_area` VALUES ('776', '28', '金昌', 'jinchang');
INSERT INTO `weshop_area` VALUES ('777', '28', '白银', 'baiyin');
INSERT INTO `weshop_area` VALUES ('778', '28', '天水', 'tianshui');
INSERT INTO `weshop_area` VALUES ('779', '28', '酒泉', 'jiuquan');
INSERT INTO `weshop_area` VALUES ('780', '28', '张掖', 'zhangye');
INSERT INTO `weshop_area` VALUES ('781', '28', '武威', 'wuwei');
INSERT INTO `weshop_area` VALUES ('782', '28', '定西', 'dingxi');
INSERT INTO `weshop_area` VALUES ('783', '28', '陇南', 'longnan');
INSERT INTO `weshop_area` VALUES ('784', '28', '平凉', 'pingliang');
INSERT INTO `weshop_area` VALUES ('785', '28', '庆阳', 'qingyang');
INSERT INTO `weshop_area` VALUES ('786', '28', '临夏', 'linxia');
INSERT INTO `weshop_area` VALUES ('787', '28', '甘南', 'gannan2');
INSERT INTO `weshop_area` VALUES ('788', '28', '合作', 'hezuo');
INSERT INTO `weshop_area` VALUES ('789', '28', '凉州', 'liangzhou');
INSERT INTO `weshop_area` VALUES ('790', '28', '静宁', 'jingning');
INSERT INTO `weshop_area` VALUES ('791', '28', '武都', 'wudu');
INSERT INTO `weshop_area` VALUES ('792', '28', '西峰', 'xifeng');
INSERT INTO `weshop_area` VALUES ('793', '29', '石嘴山', 'shizuishan');
INSERT INTO `weshop_area` VALUES ('794', '29', '吴忠', 'wuzhong');
INSERT INTO `weshop_area` VALUES ('795', '29', '固原', 'guyuan');
INSERT INTO `weshop_area` VALUES ('796', '30', '海东', 'haidong');
INSERT INTO `weshop_area` VALUES ('797', '30', '海南', 'hainan2');
INSERT INTO `weshop_area` VALUES ('798', '30', '海西', 'haixi');
INSERT INTO `weshop_area` VALUES ('799', '30', '海北', 'haibei');
INSERT INTO `weshop_area` VALUES ('800', '30', '黄南', 'huangnan');
INSERT INTO `weshop_area` VALUES ('801', '30', '玉树', 'yushu');
INSERT INTO `weshop_area` VALUES ('802', '30', '果洛', 'guoluo');
INSERT INTO `weshop_area` VALUES ('803', '30', '格尔木', 'geermu');
INSERT INTO `weshop_area` VALUES ('804', '31', '石河子', 'shihezi');
INSERT INTO `weshop_area` VALUES ('805', '31', '克拉玛依', 'kelamayi');
INSERT INTO `weshop_area` VALUES ('806', '31', '伊犁', 'yili');
INSERT INTO `weshop_area` VALUES ('807', '31', '巴音郭勒', 'bayinguole');
INSERT INTO `weshop_area` VALUES ('808', '31', '昌吉', 'changji');
INSERT INTO `weshop_area` VALUES ('809', '31', '克孜勒苏柯尔INSE克孜', 'kezilesukeerkezi');
INSERT INTO `weshop_area` VALUES ('810', '31', '博尔塔拉', 'boertala');
INSERT INTO `weshop_area` VALUES ('811', '31', '吐鲁番', 'tulufan');
INSERT INTO `weshop_area` VALUES ('812', '31', '哈密', 'hami');
INSERT INTO `weshop_area` VALUES ('813', '31', '喀什', 'kashi');
INSERT INTO `weshop_area` VALUES ('814', '31', '和田', 'hetian');
INSERT INTO `weshop_area` VALUES ('815', '31', '阿克苏', 'akesu');
INSERT INTO `weshop_area` VALUES ('816', '31', '库尔勒', 'kuerle');
INSERT INTO `weshop_area` VALUES ('817', '31', '奎屯', 'kuitun');
INSERT INTO `weshop_area` VALUES ('818', '31', '伊宁', 'yining');
INSERT INTO `weshop_area` VALUES ('819', '31', '博乐', 'bole');
INSERT INTO `weshop_area` VALUES ('820', '31', '乌市', 'wushi');
INSERT INTO `weshop_area` VALUES ('821', '31', '塔城', 'tacheng');
INSERT INTO `weshop_area` VALUES ('822', '31', '巴州库尔勒', 'bazhoukuerle');
INSERT INTO `weshop_area` VALUES ('823', '31', '阿勒泰', 'aletai');
INSERT INTO `weshop_area` VALUES ('825', '31', '阿图什', 'atushi');
INSERT INTO `weshop_area` VALUES ('826', '12', '台州', 'taizhou2');
INSERT INTO `weshop_area` VALUES ('827', '18', '丹江口', 'danjiangkou');
INSERT INTO `weshop_area` VALUES ('828', '33', '台北', 'taibei');
INSERT INTO `weshop_area` VALUES ('829', '33', '高雄', 'gaoxiong');
INSERT INTO `weshop_area` VALUES ('830', '33', '基隆', 'jilong');
INSERT INTO `weshop_area` VALUES ('831', '33', '台中', 'taizhong');
INSERT INTO `weshop_area` VALUES ('832', '33', '台南', 'tainan');
INSERT INTO `weshop_area` VALUES ('833', '33', '新竹', 'xinzhu');
INSERT INTO `weshop_area` VALUES ('834', '33', '嘉义', 'jiayi');
INSERT INTO `weshop_area` VALUES ('835', '34', '中西', '');
INSERT INTO `weshop_area` VALUES ('836', '34', '湾仔', '');
INSERT INTO `weshop_area` VALUES ('837', '34', '东', '');
INSERT INTO `weshop_area` VALUES ('838', '34', '南', '');
INSERT INTO `weshop_area` VALUES ('839', '34', '油尖旺', '');
INSERT INTO `weshop_area` VALUES ('840', '34', '深水埗', '');
INSERT INTO `weshop_area` VALUES ('841', '34', '九龙城区', '');
INSERT INTO `weshop_area` VALUES ('842', '34', '黄大仙', '');
INSERT INTO `weshop_area` VALUES ('843', '34', '观塘', '');
INSERT INTO `weshop_area` VALUES ('844', '34', '北', '');
INSERT INTO `weshop_area` VALUES ('845', '34', '大埔区', '');
INSERT INTO `weshop_area` VALUES ('846', '34', '沙田', '');
INSERT INTO `weshop_area` VALUES ('847', '34', '西贡', '');
INSERT INTO `weshop_area` VALUES ('848', '34', '荃湾', '');
INSERT INTO `weshop_area` VALUES ('849', '34', '屯门', '');
INSERT INTO `weshop_area` VALUES ('850', '34', '元朗', '');
INSERT INTO `weshop_area` VALUES ('851', '34', '葵青', '');
INSERT INTO `weshop_area` VALUES ('852', '34', '离岛', '');
INSERT INTO `weshop_area` VALUES ('853', '35', '花地玛堂', '');
INSERT INTO `weshop_area` VALUES ('854', '35', '市圣安多尼堂', '');
INSERT INTO `weshop_area` VALUES ('855', '35', '大堂', '');
INSERT INTO `weshop_area` VALUES ('856', '35', '望德堂', '');
INSERT INTO `weshop_area` VALUES ('857', '35', '风顺堂', '');
INSERT INTO `weshop_area` VALUES ('858', '35', '嘉模堂', '');
INSERT INTO `weshop_area` VALUES ('859', '35', '圣方济各堂', '');

-- ----------------------------
-- Table structure for `weshop_article`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_article`;
CREATE TABLE `weshop_article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `shop_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `title` varchar(20) NOT NULL,
  `content` text,
  `is_del` tinyint(1) NOT NULL DEFAULT '0',
  `is_verify` tinyint(1) NOT NULL DEFAULT '1',
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_article
-- ----------------------------
INSERT INTO `weshop_article` VALUES ('1', '1', '1', '', 'asdasdasda', '0', '1', '2014-11-18 15:50:59', '2014-11-18 15:59:00');
INSERT INTO `weshop_article` VALUES ('2', '1', '1', '', 'asdasdasdad', '0', '1', '2014-11-18 15:54:04', '2014-11-18 15:59:02');
INSERT INTO `weshop_article` VALUES ('3', '12', '1', 'sadsada', 'asdqwe', '0', '1', '2014-11-18 15:59:56', '2014-11-18 15:59:56');
INSERT INTO `weshop_article` VALUES ('4', '1', '1', '啊实打实大', '按时打算打算', '0', '1', '2014-11-21 11:28:09', '2014-11-21 11:28:09');
INSERT INTO `weshop_article` VALUES ('5', '21', '1', '自行车自行车a', '四大四大', '0', '1', '2014-11-21 11:34:48', '2014-11-21 11:34:48');
INSERT INTO `weshop_article` VALUES ('6', '1', '1', '啊实打实大', '请问', '0', '1', '2014-11-21 11:38:07', '2014-11-21 11:38:07');
INSERT INTO `weshop_article` VALUES ('7', '1', '1', 'adadadad', 'ad1231231231', '0', '1', '2014-11-24 11:24:59', '2014-11-24 11:24:59');
INSERT INTO `weshop_article` VALUES ('8', '1', '1', 'zxczaaa', 'asdasd', '0', '1', '2014-11-24 11:26:28', '2014-11-24 11:26:28');
INSERT INTO `weshop_article` VALUES ('9', '1', '1', 'qwe', 'asdsa', '0', '1', '2014-11-24 11:27:09', '2014-11-24 11:27:09');
INSERT INTO `weshop_article` VALUES ('10', '1', '1', '大大声道', 'qwe', '0', '1', '2014-11-24 11:27:54', '2014-11-24 11:27:54');

-- ----------------------------
-- Table structure for `weshop_detail_pic`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_detail_pic`;
CREATE TABLE `weshop_detail_pic` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `detail_id` bigint(20) NOT NULL,
  `pic_url` varchar(200) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_major` tinyint(1) NOT NULL DEFAULT '0',
  `is_valid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_detail_pic
-- ----------------------------
INSERT INTO `weshop_detail_pic` VALUES ('1', '3', 'item/aaa.jpg', '2014-12-01 15:43:23', '1', '1');
INSERT INTO `weshop_detail_pic` VALUES ('2', '3', 'item/bbb.jpg', '2014-12-01 15:47:12', '1', '1');
INSERT INTO `weshop_detail_pic` VALUES ('3', '2', 'item/aaa.jpg', '2014-12-01 15:47:29', '1', '1');
INSERT INTO `weshop_detail_pic` VALUES ('4', '4', 'item/aaa.jpg', '2014-12-01 15:47:29', '1', '1');
INSERT INTO `weshop_detail_pic` VALUES ('5', '5', 'item/bbb.jpg', '2014-12-01 16:36:48', '1', '1');
INSERT INTO `weshop_detail_pic` VALUES ('6', '6', 'item/bbb.jpg', '2014-12-02 17:33:01', '1', '1');

-- ----------------------------
-- Table structure for `weshop_dict_color`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_dict_color`;
CREATE TABLE `weshop_dict_color` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `color_name` varchar(20) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_valid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_dict_color
-- ----------------------------
INSERT INTO `weshop_dict_color` VALUES ('1', '红色', '2014-11-29 15:19:27', '1');
INSERT INTO `weshop_dict_color` VALUES ('2', '白色', '2014-11-29 15:19:40', '1');
INSERT INTO `weshop_dict_color` VALUES ('3', '黑色', '2014-11-29 17:30:35', '1');
INSERT INTO `weshop_dict_color` VALUES ('4', '蓝色', '2014-12-01 14:34:50', '1');

-- ----------------------------
-- Table structure for `weshop_dict_shoe_brand`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_dict_shoe_brand`;
CREATE TABLE `weshop_dict_shoe_brand` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_valid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_dict_shoe_brand
-- ----------------------------
INSERT INTO `weshop_dict_shoe_brand` VALUES ('1', 'NIKE', 'NIKE是全球著名的体育运动品牌，英文原意指希腊胜利女神，中文译为耐克', '2014-11-28 16:16:16', '1');
INSERT INTO `weshop_dict_shoe_brand` VALUES ('2', 'ADIDAS', '流行品牌', '2014-11-28 16:16:16', '1');
INSERT INTO `weshop_dict_shoe_brand` VALUES ('3', 'LiNing', '李宁', '2014-11-29 17:31:12', '1');

-- ----------------------------
-- Table structure for `weshop_dict_shoe_material`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_dict_shoe_material`;
CREATE TABLE `weshop_dict_shoe_material` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `material_name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_valid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_dict_shoe_material
-- ----------------------------
INSERT INTO `weshop_dict_shoe_material` VALUES ('1', '皮革', '这个是一个特殊的材质', '2014-11-27 14:22:43', '1');
INSERT INTO `weshop_dict_shoe_material` VALUES ('2', '塑料', '塑料', '2014-12-01 17:35:10', '1');

-- ----------------------------
-- Table structure for `weshop_dict_shoe_size`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_dict_shoe_size`;
CREATE TABLE `weshop_dict_shoe_size` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `size` float(5,2) NOT NULL,
  `description` varchar(50) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_dict_shoe_size
-- ----------------------------
INSERT INTO `weshop_dict_shoe_size` VALUES ('1', '1.00', '37码', '2014-11-26 11:13:00');
INSERT INTO `weshop_dict_shoe_size` VALUES ('2', '2.00', '38码', '2014-11-26 11:13:09');

-- ----------------------------
-- Table structure for `weshop_dict_shop_promise`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_dict_shop_promise`;
CREATE TABLE `weshop_dict_shop_promise` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `promise_name` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  `pic_url` varchar(200) NOT NULL DEFAULT '',
  `is_valid` tinyint(1) NOT NULL DEFAULT '0',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_dict_shop_promise
-- ----------------------------
INSERT INTO `weshop_dict_shop_promise` VALUES ('1', '100%正品保证', '100%正品保证', 'promise_zp', '1', '2014-11-26 17:02:09');
INSERT INTO `weshop_dict_shop_promise` VALUES ('2', '下单3小时发货', '下单3小时发货', 'quily_fh', '1', '2014-11-26 17:02:32');
INSERT INTO `weshop_dict_shop_promise` VALUES ('3', '七天无理由退货', '七天无理由退货', 'seven_return', '1', '2014-11-26 17:02:45');

-- ----------------------------
-- Table structure for `weshop_item`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_item`;
CREATE TABLE `weshop_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `detail_id` bigint(20) NOT NULL,
  `short_name` varchar(20) NOT NULL,
  `shop_id` bigint(20) NOT NULL,
  `create_user_id` bigint(20) NOT NULL,
  `class_id` bigint(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  `pic_url` varchar(200) NOT NULL,
  `price` float(10,2) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_item
-- ----------------------------
INSERT INTO `weshop_item` VALUES ('1', '0', '锅包肉', '14', '1', '2', '肉肉', 'item/aaa.jpg', '110.32', '2014-11-21 15:41:48', '2014-11-29 15:46:29');
INSERT INTO `weshop_item` VALUES ('2', '4', 'nike air max 90', '14', '1', '3', 'nike air max 90', 'item/bbb.jpg', '563.10', '2014-11-21 15:54:29', '2014-12-08 13:58:37');
INSERT INTO `weshop_item` VALUES ('3', '2', '李宁休闲鞋', '14', '1', '3', '李宁休闲鞋', 'item/bbb.jpg', '165.03', '2014-11-21 15:54:37', '2014-12-08 13:58:25');
INSERT INTO `weshop_item` VALUES ('4', '5', 'nike 詹姆斯篮球鞋', '14', '1', '3', 'nike 詹姆斯篮球鞋', 'item/aaa.jpg', '653.65', '2014-11-21 15:54:45', '2014-12-08 13:58:41');
INSERT INTO `weshop_item` VALUES ('5', '6', 'asdasd12', '14', '1', '3', '123asda', 'item/bbb.jpg', '3.65', '2014-11-21 15:54:53', '2014-12-08 13:58:52');
INSERT INTO `weshop_item` VALUES ('6', '0', 'adad132', '14', '1', '3', 'adqweq', 'item/bbb.jpg', '36.65', '2014-11-21 15:55:01', '2014-12-03 10:33:49');
INSERT INTO `weshop_item` VALUES ('7', '0', '啊实打实大', '14', '1', '2', '请问企鹅', 'item/bbb.jpg', '5656.30', '2014-11-24 11:00:47', '2014-11-29 15:46:36');
INSERT INTO `weshop_item` VALUES ('8', '0', 'asdaqweqwe', '14', '1', '1', 'qweqwe', 'item/aaa.jpg', '565.00', '2014-11-24 11:00:55', '2014-11-29 15:46:36');
INSERT INTO `weshop_item` VALUES ('9', '0', 'adsad', '14', '1', '1', 'qweqweq', 'item/aaa.jpg', '565.00', '2014-11-24 11:01:02', '2014-11-29 15:46:39');
INSERT INTO `weshop_item` VALUES ('10', '3', 'ADIDAS  篮球鞋', '14', '1', '3', 'ADIDAS  篮球鞋', 'item/aaa.jpg', '1198.00', '2014-11-24 11:29:01', '2014-12-08 13:58:31');
INSERT INTO `weshop_item` VALUES ('11', '0', 'aaaaa', '1', '1', '1', '1111', 'item/aaa.jpg', '666.00', '2014-11-24 17:16:56', '2014-11-26 10:43:57');

-- ----------------------------
-- Table structure for `weshop_item_class`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_item_class`;
CREATE TABLE `weshop_item_class` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `alias` varchar(20) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_item_class
-- ----------------------------
INSERT INTO `weshop_item_class` VALUES ('1', '服装', '2014-11-21 15:25:58');
INSERT INTO `weshop_item_class` VALUES ('2', '美食', '2014-11-21 15:26:03');
INSERT INTO `weshop_item_class` VALUES ('3', '鞋', '2014-11-25 15:10:07');

-- ----------------------------
-- Table structure for `weshop_item_position`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_item_position`;
CREATE TABLE `weshop_item_position` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `item_id` bigint(20) NOT NULL,
  `shop_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `position` int(5) NOT NULL,
  `is_del` tinyint(1) NOT NULL DEFAULT '0',
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_item_position
-- ----------------------------
INSERT INTO `weshop_item_position` VALUES ('2', '2', '14', '1', '1', '0', '1990-01-01 00:00:00', '2014-12-08 14:08:33');
INSERT INTO `weshop_item_position` VALUES ('3', '3', '14', '1', '1', '0', '1990-01-01 00:00:00', '2014-12-08 14:08:41');
INSERT INTO `weshop_item_position` VALUES ('4', '4', '14', '1', '1', '0', '1990-01-01 00:00:00', '2014-12-08 14:08:45');
INSERT INTO `weshop_item_position` VALUES ('5', '5', '14', '1', '1', '0', '1990-01-01 00:00:00', '2014-12-08 14:08:49');
INSERT INTO `weshop_item_position` VALUES ('10', '10', '14', '1', '1', '0', '1990-01-01 00:00:00', '2014-12-08 14:08:50');

-- ----------------------------
-- Table structure for `weshop_shoe`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_shoe`;
CREATE TABLE `weshop_shoe` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `shop_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `brand_id` bigint(20) NOT NULL,
  `price` float(10,2) NOT NULL,
  `raw_price` float(10,2) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `short_name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `come_from` varchar(10) NOT NULL,
  `material_id` bigint(20) NOT NULL,
  `color_id` bigint(20) NOT NULL,
  `note` varchar(50) NOT NULL,
  `serial_number` varchar(50) NOT NULL,
  `rel_link` text NOT NULL,
  `is_vertify` tinyint(1) NOT NULL DEFAULT '0',
  `on_sell` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_shoe
-- ----------------------------
INSERT INTO `weshop_shoe` VALUES ('2', '14', '1', '1', '1198.00', '11980.00', '1990-01-01 00:00:00', '2014-12-07 16:17:34', 'nike air max 90 跑步鞋', 'nike air max 90 跑步鞋', '越南', '1', '1', '跑步专用', '5656865656', 'http://g.click.taobao.com/q?ak=12651499&pid=mm_31576222_4292510_14504533&rd=1&ct=itemid%3D37982188391%26url%3Dhttp%253A%252F%252Fitem.taobao.com%252Fitem.htm%253Fid%253D37982188391&rf=http%3A%2F%2Fgo.hupu.com%2Fu%3Furl%3Dhttp%253A%252F%252Fitem.taobao.com%252Fitem.htm%253Fspm%253Da1z10.1.w4004-8841047853.30.S0NRFI%2526id%253D37982188391&et=95076814&pgid=ec8ca7f38f862e892858c9548e99eacb&v=1.1', '1', '1');
INSERT INTO `weshop_shoe` VALUES ('3', '14', '1', '2', '2356.00', '656566.00', '1990-01-01 00:00:00', '2014-12-07 16:17:34', 'ADIDAS  篮球鞋', 'ADIDAS  篮球鞋', '中国', '2', '2', '甲亢是就到啦', '4454644446', 'asdasd', '1', '1');
INSERT INTO `weshop_shoe` VALUES ('4', '14', '1', '3', '154646.00', '56456.00', '1990-01-01 00:00:00', '2014-12-07 16:17:34', '李宁休闲', '李宁休闲', '1321', '1', '3', 'asdasd', '1231', 'qweqwe', '1', '1');
INSERT INTO `weshop_shoe` VALUES ('5', '14', '1', '1', '1180.00', '1680.00', '1990-01-01 00:00:00', '2014-12-07 16:17:34', 'nike 詹姆斯篮球鞋', 'nike 詹姆斯篮球鞋', '越南', '1', '4', '阿斯达', '12311ad', '1231weq', '1', '1');
INSERT INTO `weshop_shoe` VALUES ('6', '14', '1', '1', '5698.00', '56899.00', '1990-01-01 00:00:00', '2014-12-07 16:17:34', 'nike 足球鞋', 'nike 足球鞋', '中国', '1', '1', '驱蚊器', 'asdjkljlk', 'adasd', '1', '1');

-- ----------------------------
-- Table structure for `weshop_shoe_size_rel`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_shoe_size_rel`;
CREATE TABLE `weshop_shoe_size_rel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `item_id` bigint(20) NOT NULL,
  `shoe_id` bigint(20) NOT NULL,
  `size_id` bigint(20) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_valid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_shoe_size_rel
-- ----------------------------
INSERT INTO `weshop_shoe_size_rel` VALUES ('1', '10', '3', '1', '1990-01-01 00:00:00', '2014-11-30 19:30:32', '1');
INSERT INTO `weshop_shoe_size_rel` VALUES ('2', '10', '3', '2', '1990-01-01 00:00:00', '2014-11-30 19:30:30', '1');
INSERT INTO `weshop_shoe_size_rel` VALUES ('3', '3', '2', '1', '1990-01-01 00:00:00', '2014-12-01 15:29:11', '1');
INSERT INTO `weshop_shoe_size_rel` VALUES ('4', '2', '4', '2', '1990-01-01 00:00:00', '2014-12-01 15:29:23', '1');
INSERT INTO `weshop_shoe_size_rel` VALUES ('5', '4', '5', '2', '1990-01-01 00:00:00', '2014-12-01 15:29:34', '1');
INSERT INTO `weshop_shoe_size_rel` VALUES ('6', '5', '6', '1', '1990-01-01 00:00:00', '2014-12-03 10:44:36', '1');

-- ----------------------------
-- Table structure for `weshop_shop`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_shop`;
CREATE TABLE `weshop_shop` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `short_name` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `tips` varchar(200) NOT NULL,
  `province` bigint(20) NOT NULL,
  `city` bigint(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `logo` varchar(50) NOT NULL,
  `publicity_photo` varchar(50) NOT NULL,
  `taobao_link` varchar(200) NOT NULL,
  `is_vertify` tinyint(1) NOT NULL DEFAULT '0',
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_shop
-- ----------------------------
INSERT INTO `weshop_shop` VALUES ('1', '1', '新品会', 'a阿斯顿大飒飒的按aaaaaaa', 'qweqweqwewq', '-1', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-13 16:27:07', '2014-12-16 13:46:07');
INSERT INTO `weshop_shop` VALUES ('2', '1', '京东', '阿斯顿记录卡见识到了卡机顺路快递将阿里卡', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '1990-01-01 00:00:00', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('6', '1', 'ad按时打算', '请问我企鹅', 'asda23123', '1', '200', '北七家镇东三旗村村1北北辰亚运村汽车交易市场北六区1号', '123131', 'dqweq', 'eqwesdasdasdadsad', '0', '2014-11-17 16:13:28', '2014-12-15 15:07:48');
INSERT INTO `weshop_shop` VALUES ('7', '1', 'asdasda3', '123123', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-17 16:17:16', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('8', '1', '按时打算', '123123', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-17 16:18:21', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('9', '1', '三等奖咖啡加水电费', '阿斯达啊三大', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-18 13:50:05', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('10', '1', '阿斯达', '请问请问', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-18 14:47:46', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('11', '1', '阿斯达', '爱上大声地', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-18 14:48:22', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('12', '1', '阿斯达到权威', '企鹅王全文', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-18 14:48:26', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('13', '1', '第三方的', '沃尔', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-18 14:54:10', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('14', '1', '云天潮鞋专卖', '云天潮鞋专卖是一家专卖按时打算打算打按时打算打打阿打算阿打算奥迪打算打打阿打算阿打算奥打算打打阿打算阿打算奥打算打打阿打算阿打算奥阿斯达轻人潮', '欢迎各位朋友来到本店，可以随便看看，不买也好，收藏一下，定有一款产品适合你O(∩_∩)O\r\n知道你为什么单身吗？为什么跟ta吵架吗？为什么分手吗？因为你没送ta充电宝！让ta需要的时候想到你。', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', 'shop/shop_logo/9697132_100048418000.jpg', 'shop/shop_publicity/a123asdas31231.jpg', 'http://nike.tmall.com/', '0', '2014-11-18 14:56:25', '2014-12-16 14:24:21');
INSERT INTO `weshop_shop` VALUES ('15', '1', '下次V型规范', '按时打算', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-18 15:02:09', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('16', '1', '死到改革', '沃尔我日', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-18 15:07:27', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('17', '1', '胜多负少', '134124 ', '', '0', '0', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-18 15:27:34', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('18', '1', 'a按时打算', '阿斯达善颂善祷奥迪', '', '345', '345', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-21 11:17:05', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('19', '1', '啊实打实大', '奥迪32额', '', '6', '215', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-21 11:19:53', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('20', '1', 'aasdqweqw', 'qeqweqweqweq', '', '7', '222', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-21 11:24:03', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('21', '1', 'asdasd', 'aasdasd', '', '5', '197', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-21 11:34:39', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('22', '1', 'asdqweq123123', 'qw123123', '', '4', '233', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-21 11:38:24', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('23', '1', '啊实打实大', '阿打算打撒打算打算打算的', '', '2', '314', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-24 17:02:47', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('24', '1', 'asdad', '按时打算打算', '', '4', '233', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-24 17:03:56', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('25', '1', 'adasd', '12313', '', '3', '194', '北七家镇东三旗村村北北辰亚运村汽车交易市场北六区1号', '', '', '', '0', '2014-11-24 17:16:14', '2014-12-04 15:12:48');
INSERT INTO `weshop_shop` VALUES ('26', '1', 'asdasd', 'qweqwe', 'qeqwe', '4', '233', 'qweqwe', 'asdasdasdas', 'dqweq', 'eqeqeqweqee', '0', '2014-12-12 16:24:59', '2014-12-12 16:24:59');
INSERT INTO `weshop_shop` VALUES ('27', '1', 'dfgdfgfdg', 'rwerwer', '2erwr234234', '3', '282', 'wrwer', 'wsdasdasd', 'asdasdqwe', 'qweqweqwe', '0', '2014-12-12 16:37:29', '2014-12-12 16:37:29');
INSERT INTO `weshop_shop` VALUES ('28', '1', 'adasd', 'qwe12', '3123', '5', '197', '131', 'weqw', 'eqwe', 'qeqeqwe', '0', '2014-12-12 16:39:43', '2014-12-12 16:39:43');
INSERT INTO `weshop_shop` VALUES ('29', '1', 'asdasd', '13123', '1312', '5', '197', 'asdasd', 'asdqe', 'qeq', 'eqeqeqeq', '0', '2014-12-12 16:40:58', '2014-12-12 16:40:58');
INSERT INTO `weshop_shop` VALUES ('30', '1', 'asd', 'qwe', '123123', '3', '194', 'sdad', 'wq', 'zsd', 'asdasd', '0', '2014-12-12 16:43:40', '2014-12-12 16:43:40');
INSERT INTO `weshop_shop` VALUES ('31', '1', 'asdasd', 'qweqeqw', 'eqweqweqwe', '3', '194', 'qe1312', 'qdqe', 'qwe', 'qdasdasd', '0', '2014-12-12 17:00:35', '2014-12-12 17:00:35');
INSERT INTO `weshop_shop` VALUES ('32', '1', 'asdasdad', 'qweqw', 'e123123', '4', '233', 'qweq', 'asd', 'adqw', 'eqweqweqeqw', '0', '2014-12-12 17:03:50', '2014-12-12 17:03:50');
INSERT INTO `weshop_shop` VALUES ('33', '1', 'dqweq1231', '12', '312312qw', '4', '233', 'sdadadq', 'weqe', 'qeqe', 'asdasdasdasd', '0', '2014-12-12 17:06:12', '2014-12-12 17:06:12');
INSERT INTO `weshop_shop` VALUES ('34', '13', 'adsasd', 'qwe123123', '13123', '2', '185', 'dqwe', 'qweqe', 'qeqeqeqe', 'qweqeqweqee', '0', '2014-12-16 11:54:07', '2014-12-16 11:54:07');
INSERT INTO `weshop_shop` VALUES ('35', '1', 'qwe123', 'qweqweqe', 'asdadasd13', '1', '186', 'qweqeasdasd', 'shop/shop_logo/14188892331129255.jpg', 'shop/shop_publicity/14188892331127144.jpg', 'ad12asdasda', '0', '2014-12-18 15:53:53', '2014-12-18 15:53:53');

-- ----------------------------
-- Table structure for `weshop_shop_advertsing`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_shop_advertsing`;
CREATE TABLE `weshop_shop_advertsing` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `shop_id` bigint(20) NOT NULL,
  `pic_url` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `link` varchar(200) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_valid` tinyint(1) NOT NULL DEFAULT '0',
  `is_vertify` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_shop_advertsing
-- ----------------------------
INSERT INTO `weshop_shop_advertsing` VALUES ('1', '14', 'shop/ads/ad_1.jpg', '1', 'http://www.baidu.com', '1990-01-01 00:00:00', '2014-12-04 11:05:31', '1', '1');
INSERT INTO `weshop_shop_advertsing` VALUES ('2', '14', 'shop/ads/ad_2.jpg', '2', 'shop/ad_1.jpg', '1990-01-01 00:00:00', '2014-12-04 11:05:33', '1', '1');
INSERT INTO `weshop_shop_advertsing` VALUES ('3', '14', 'shop/ads/ad_3.jpg', '3', 'shop/ad_1.jpg', '1990-01-01 00:00:00', '2014-12-04 11:05:34', '1', '1');

-- ----------------------------
-- Table structure for `weshop_shop_promise_rel`
-- ----------------------------
DROP TABLE IF EXISTS `weshop_shop_promise_rel`;
CREATE TABLE `weshop_shop_promise_rel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `shop_id` bigint(20) NOT NULL,
  `promise_id` bigint(20) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weshop_shop_promise_rel
-- ----------------------------
INSERT INTO `weshop_shop_promise_rel` VALUES ('4', '14', '1', '1990-01-01 00:00:00');
INSERT INTO `weshop_shop_promise_rel` VALUES ('5', '14', '2', '1990-01-01 00:00:00');
INSERT INTO `weshop_shop_promise_rel` VALUES ('6', '14', '3', '1990-01-01 00:00:00');
