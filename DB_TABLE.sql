CREATE TABLE `user`(`user_id` INT not null, `name` varchar (50) not null, `password` varchar (255) not null,PRIMARY KEY (`user_id`));
CREATE TABLE `film`(`film_id` INT not null, `film_name` varchar (50) not null, `publish_date` datetime, PRIMARY KEY (`film_id`));
CREATE TABLE `category`(`category_id` INT, `category_name` varchar (255) not null, PRIMARY KEY (`category_id`));
CREATE TABLE `artis`(`artis_id` INT, `artis_name` varchar (255) not null,`artis_dob` varchar (255) not null,PRIMARY KEY (`artis_id`));
CREATE TABLE `daftar_nonton`(`user_id` INT not null, `film_id` INT not null, `tanggal_nonton` datetime, PRIMARY KEY (`user_id`, `film_id`), FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`), FOREIGN KEY(`film_id`) REFERENCES `film`(`film_id`));
CREATE TABLE `category_film`(`film_id` INT, `category_id` INT, PRIMARY KEY (`film_id`,`category_id`), FOREIGN KEY(`film_id`) REFERENCES `film`(`film_id`), FOREIGN KEY(`category_id`) REFERENCES `category`(`category_id`));
CREATE TABLE `cast`(`film_id` INT, `artis_id` INT, PRIMARY KEY (`film_id`, `artis_id`), FOREIGN KEY(`film_id`) REFERENCES `film`(`film_id`), FOREIGN KEY (`artis_id`) REFERENCES `artis` (`artis_id`));