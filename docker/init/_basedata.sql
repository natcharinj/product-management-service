DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT '',
  `price` int(11) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES (1,'product A',1200,'2022-10-15 09:53:41','2022-10-15 09:53:41',NULL),(2,'product B',1000,'2022-10-15 09:57:51','2022-10-15 09:57:51',NULL),(3,'product C',700,'2022-10-15 10:02:41','2022-10-15 10:02:41',NULL);
UNLOCK TABLES;