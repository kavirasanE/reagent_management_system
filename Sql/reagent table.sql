SELECT * FROM reagent_inventory.reagentdata;

<<<<<<< HEAD
CREATE DATABASE reagent_inventory;
SHOW DATABASES;
USE reagent_inventory;

CREATE TABLE reagentdata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Analyte VARCHAR(255) NOT NULL,
    Reagent_Name VARCHAR(255) NOT NULL,
    Lot_No VARCHAR(130) NOT NULL,
    Expiry_Date DATE NOT NULL,
    Stocks_Available INT NOT NULL,
    new_stock INT NOT NULL,
    Technician_Name VARCHAR(255) NOT NULL,
    Total_Stocks INT NOT NULL,
    No_of_Packs_Used INT DEFAULT 0,
    currentdate DATETIME NOT NULL
);

describe reagentdata;

select * from reagentdata

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Chennai@123';
FLUSH PRIVILEGES;

describe  reagent_inventory.reagentdata;

select * from reagent_inventory.reagentdata;
ALTER TABLE reagentdata
MODIFY COLUMN Expiry_Date VARCHAR(255) NOT NULL;
CREATE TABLE reagentdata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Analyte VARCHAR(255) NOT NULL,
    Reagent_Name VARCHAR(255) NOT NULL,
    Lot_No VARCHAR(130) NOT NULL,
    Expiry_Date DATE NOT NULL,
    Stocks_Available INT NOT NULL,
    new_stock INT NOT NULL,
    Technician_Name VARCHAR(255) NOT NULL,
    Total_Stocks INT NOT NULL,
    No_of_Packs_Used INT DEFAULT 0,
    currentdate DATETIME NOT NULL
);


















=======
>>>>>>> 64ae26d1766c226aef40365ac21aca636b8094fb
show create table reagentdata;

describe reagentdata;

truncate  reagentdata;
SET SQL_SAFE_UPDATES = 1;
describe reagent_inventory.reagentdata;

ALTER TABLE reagentdata
MODIFY COLUMN Lot_No VARCHAR(255) NOT NULL;

alter table reagentdata
add constraint unique_lotno unique (Lot_No);



alter table reagent_inventory.reagentdata
Rename column Stocks_Avaliable to Stocks_Available;

truncate   reagent_inventory.reagentdata;


truncate reagentdata;



alter table reagentdata
modify column Lot_No varchar(255) not null;

Alter table reagentdata 
change column id ReagentId int not null;

alter table reagentdata
add constraint fk_ReagentId
Foreign key (ReagentId) References usagetbale(UsageId);

SELECT DISTINCT ReagentId 
FROM reagentdata 
WHERE ReagentId NOT IN (SELECT UsageId FROM usagetbale);

alter table reagent_inventory.reagentdata
modify ReagentId  int not null;

describe  reagent_inventory.reagentdata;
DESCRIBE reagentdata;

SHOW CREATE TABLE reagentdata;

ALTER TABLE `reagentdata`
MODIFY COLUMN ReagentId INT DEFAULT 0;

alter table reagentdata
add column id int auto_increment ;

alter table reagentdata
drop column ReagentId;

ALTER TABLE table_name
DROP FOREIGN KEY ReagentId;

SHOW TABLES;

ALTER TABLE reagentdata
DROP FOREIGN KEY ReagentId;

SELECT CONSTRAINT_NAME 
FROM information_schema.KEY_COLUMN_USAGE 
WHERE TABLE_NAME = 'reagentdata'
  AND TABLE_SCHEMA = 'reagent_inventory';
  
alter table reagentdata
  drop foreign key fk_ReagentId;
  
  ALTER TABLE reagentdata
DROP COLUMN ReagentId;

describe reagentdata;

alter table reagentdata
add column id  int not null primary key auto_increment; 


