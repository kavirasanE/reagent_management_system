SELECT * FROM reagent_inventory.reagentdata;

show create table reagentdata;

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


