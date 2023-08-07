SELECT * FROM `film` WHERE 1;
SELECT * FROM `category` WHERE category_id>5;
SELECT f.film_name, c.category_name FROM category_film d JOIN film f on f.film_id = d.film_id JOIN category c on c.category_id = d.category_id;
SELECT a.artis_name, f.film_name FROM cast d JOIN artis a on a.artis_id = d.artis_id JOIN film f on f.film_id = f.film_id;
SELECT `tanggal_nonton`, f.film_name FROM daftar_nonton d JOIN film f on f.film_id = f.film_id;