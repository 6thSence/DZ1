/*
Navicat MySQL Data Transfer

Source Server         : My Bases
Source Server Version : 50541
Source Host           : localhost:3306
Source Database       : portfolio

Target Server Type    : MYSQL
Target Server Version : 50541
File Encoding         : 65001

Date: 2015-06-17 22:25:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `projects`
-- ----------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `link` text NOT NULL,
  `description` text NOT NULL,
  `thumb` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of projects
-- ----------------------------
INSERT INTO `projects` VALUES ('1', 'loftblog.ru', 'http://loftblog.ru/', 'Сайт с уроками по web разработке', 'loftblog.jpg', '0');
INSERT INTO `projects` VALUES ('2', 'itloft.ru', 'http://itloft.ru/', 'Сайт агенства интернет решений itloft', 'itloft.jpg', '0');
INSERT INTO `projects` VALUES ('3', 'landingsloft.ru', 'http://landingsloft.ru/', 'Сайт по разработке лендингов с гарантией', 'landingsloft.jpg', '0');
INSERT INTO `projects` VALUES ('4', 'kovalchuk.us', 'http://kovalchuk.us/', 'Личный сайт Дмитрия Ковальчука', 'kovalchuk.png', '0');
INSERT INTO `projects` VALUES ('5', 'loftschool.com', 'http://loftschool.com/', 'Школа онлайн образования', 'loftschool.png', '0');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `password` char(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', '21232f297a57a5a743894a0e4a801fc3');
