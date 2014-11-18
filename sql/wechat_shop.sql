/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50519
Source Host           : localhost:3306
Source Database       : wechat_shop

Target Server Type    : MYSQL
Target Server Version : 50519
File Encoding         : 65001

Date: 2014-11-18 16:02:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `article`
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '1', '1', '', 'asdasdasda', '0', '1', '2014-11-18 15:50:59', '2014-11-18 15:59:00');
INSERT INTO `article` VALUES ('2', '1', '1', '', 'asdasdasdad', '0', '1', '2014-11-18 15:54:04', '2014-11-18 15:59:02');
INSERT INTO `article` VALUES ('3', '12', '1', 'sadsada', 'asdqwe', '0', '1', '2014-11-18 15:59:56', '2014-11-18 15:59:56');

-- ----------------------------
-- Table structure for `shop`
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `short_name` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('1', '新品会', 'a阿斯顿大飒飒的按时按时', '2014-11-13 16:27:07', '2014-11-13 16:27:07');
INSERT INTO `shop` VALUES ('2', '京东', '阿斯顿记录卡见识到了卡机顺路快递将阿里卡', '1990-01-01 00:00:00', '2014-11-17 11:42:39');
INSERT INTO `shop` VALUES ('6', 'ad按时打算', '请问我企鹅', '2014-11-17 16:13:28', '2014-11-17 16:13:28');
INSERT INTO `shop` VALUES ('7', 'asdasda3', '123123', '2014-11-17 16:17:16', '2014-11-17 16:17:16');
INSERT INTO `shop` VALUES ('8', '按时打算', '123123', '2014-11-17 16:18:21', '2014-11-17 16:18:21');
INSERT INTO `shop` VALUES ('9', '三等奖咖啡加水电费', '阿斯达啊三大', '2014-11-18 13:50:05', '2014-11-18 13:50:05');
INSERT INTO `shop` VALUES ('10', '阿斯达', '请问请问', '2014-11-18 14:47:46', '2014-11-18 14:47:46');
INSERT INTO `shop` VALUES ('11', '阿斯达', '爱上大声地', '2014-11-18 14:48:22', '2014-11-18 14:48:22');
INSERT INTO `shop` VALUES ('12', '阿斯达到权威', '企鹅王全文', '2014-11-18 14:48:26', '2014-11-18 14:48:26');
INSERT INTO `shop` VALUES ('13', '第三方的', '沃尔', '2014-11-18 14:54:10', '2014-11-18 14:54:10');
INSERT INTO `shop` VALUES ('14', '按时打算', '按时打算打算打算的', '2014-11-18 14:56:25', '2014-11-18 14:56:25');
INSERT INTO `shop` VALUES ('15', '下次V型规范', '按时打算', '2014-11-18 15:02:09', '2014-11-18 15:02:09');
INSERT INTO `shop` VALUES ('16', '死到改革', '沃尔我日', '2014-11-18 15:07:27', '2014-11-18 15:07:27');
INSERT INTO `shop` VALUES ('17', '胜多负少', '134124 ', '2014-11-18 15:27:34', '2014-11-18 15:27:34');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_pass` varchar(20) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT '1990-01-01 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_vertify` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'aaa', '123', '1990-01-01 00:00:00', '2014-11-17 10:59:10', '1');

-- ----------------------------
-- Table structure for `user_shop`
-- ----------------------------
DROP TABLE IF EXISTS `user_shop`;
CREATE TABLE `user_shop` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `shop_id` bigint(20) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_shop
-- ----------------------------
INSERT INTO `user_shop` VALUES ('1', '1', '1', '2014-11-17 11:29:31');
INSERT INTO `user_shop` VALUES ('2', '1', '2', '2014-11-17 11:43:16');
INSERT INTO `user_shop` VALUES ('3', '1', '8', '2014-11-17 16:18:21');
INSERT INTO `user_shop` VALUES ('4', '1', '9', '2014-11-18 13:50:05');
INSERT INTO `user_shop` VALUES ('5', '1', '10', '2014-11-18 14:47:46');
INSERT INTO `user_shop` VALUES ('6', '1', '11', '2014-11-18 14:48:22');
INSERT INTO `user_shop` VALUES ('7', '1', '12', '2014-11-18 14:48:26');
INSERT INTO `user_shop` VALUES ('8', '1', '13', '2014-11-18 14:54:10');
INSERT INTO `user_shop` VALUES ('9', '1', '14', '2014-11-18 14:56:26');
INSERT INTO `user_shop` VALUES ('10', '1', '15', '2014-11-18 15:02:09');
INSERT INTO `user_shop` VALUES ('11', '1', '16', '2014-11-18 15:07:27');
INSERT INTO `user_shop` VALUES ('12', '1', '17', '2014-11-18 15:27:34');
