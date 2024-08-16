SELECT * FROM reagent_inventory.usageTable;

truncate usageTable;
describe reagent_inventory.usageTable;

-- alter table usagetable
-- add foreign key (Lot_No)references reagentdata (Lot_No);





-- Rename table  usagetbale to usageTable	

INSERT INTO usageTable 
(Analyte, Reagent_Name, Lot_No, Expiry_Date, Stocks_Available, No_of_Packs_Needed, Technician_Name, CurrentDate) 
VALUES 
('kali', 'glucse', '12AB', '2024-12-31', 100, 2, 'John Doe', NOW());