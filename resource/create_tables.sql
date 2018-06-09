CREATE DATABASE unconf_db;

CREATE TABLE `unconf_db`.`sessions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `session_title` VARCHAR(60),
  `session_time` VARCHAR(60),
  `event_id` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `unconf_db`.`events` (
	`id` int NOT NULL AUTO_INCREMENT,
	`company_name` VARCHAR(60), 
	`event_location` VARCHAR(60),
    `event_date` VARCHAR(60),
	PRIMARY KEY (`id`)
);

CREATE TABLE `unconf_db`.`participants` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`session_id` INT,
	`event_id` INT,
	`fullname` VARCHAR(60),     
	`attended` BOOL,
    `rating` INT,
	PRIMARY KEY (`id`)
);