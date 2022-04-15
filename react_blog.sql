# Host: localhost  (Version: 5.7.26)
# Date: 2022-04-14 17:14:00
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin_user"
#

CREATE TABLE `admin_user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "admin_user"
#

REPLACE INTO `admin_user` VALUES (1,'372919916','372919916');

#
# Structure for table "article"
#

CREATE TABLE `article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` varchar(255) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `article_content` text NOT NULL,
  `introduction` text,
  `addTime` int(11) DEFAULT '0',
  `view_count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

#
# Data for table "article"
#

REPLACE INTO `article` VALUES (20,'front-1','HTML测试','# 这是一篇好看的文章\n## 随便说说，那么认真搞毛啊\n# 这是一篇好看的文章\n## 随便说说，那么认真搞毛啊\n# 这是一篇好看的文章\n## 随便说说，那么认真搞毛啊','# 这是一篇好看的文章\n## 随便说说，那么认真搞毛啊',1649779200,0);

#
# Structure for table "back_type"
#

CREATE TABLE `back_type` (
  `Id` varchar(255) NOT NULL DEFAULT '',
  `childTypeName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "back_type"
#

REPLACE INTO `back_type` VALUES ('back-1','Node.js'),('back-2','JAVA');

#
# Structure for table "front_type"
#

CREATE TABLE `front_type` (
  `Id` varchar(255) NOT NULL DEFAULT '',
  `childTypeName` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "front_type"
#

REPLACE INTO `front_type` VALUES ('front-1','HTML'),('front-2','CSS'),('front-3','JavaScript'),('front-4','React.js'),('front-5','Vue.js'),('front-6','webpack');

#
# Structure for table "type"
#

CREATE TABLE `type` (
  `Id` varchar(255) NOT NULL DEFAULT '',
  `typeName` varchar(255) NOT NULL DEFAULT '',
  `orderNum` int(11) NOT NULL DEFAULT '0',
  `childTypeName` varchar(255) NOT NULL DEFAULT '',
  `typeId` varchar(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

#
# Data for table "type"
#

REPLACE INTO `type` VALUES ('back-1','后端',7,'Node.js','back-1'),('back-2','后端',8,'JAVA','back-2'),('front-1','前端',1,'HTML','front-1'),('front-2','前端',2,'CSS','front-2'),('front-3','前端',3,'JavaScript','front-3'),('front-4','前端',4,'React.js','front-4'),('front-5','前端',5,'Vue.js','front-5'),('front-6','前端',6,'Webpack','front-6');
