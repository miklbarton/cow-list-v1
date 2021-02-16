CREATE DATABASE cow_list;
USE cow_list;

CREATE TABLE cow_list_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cow_name VARCHAR(50) NOT NULL,
  cow_desc VARCHAR(150) NOT NULL
);