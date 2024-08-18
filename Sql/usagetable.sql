SELECT * FROM reagent_inventory.usageTable;

truncate usageTable;
describe reagent_inventory.usageTable;

-- alter table usagetable
-- add foreign key (Lot_No)references reagentdata (Lot_No);

UPDATE table2
JOIN table1 ON table2.id = table1.item_id
SET table2.Stocks_Available = table2.Stocks_Available + table1.packs
WHERE table1.item_id = ?; -- replace `?` with the specific item_id or use other conditions

update reagentdata
join usagetable  on reagentdata.Lot_No  = usagetable.Lot_No
set reagentdata.Stocks_Available = reagentdata.Stocks_Available - usagetable.No_of_Packs_Needed
where usagetable.Lot_No;


UPDATE reagentdata
JOIN (
    SELECT Lot_No, No_of_Packs_Needed
    FROM usagetable
    WHERE (Lot_No, CurrentDate) IN (
        SELECT Lot_No, MAX(CurrentDate)
        FROM usagetable
        GROUP BY Lot_No
    )
) latest_usage ON reagentdata.Lot_No = latest_usage.Lot_No
SET reagentdata.Stocks_Available = reagentdata.Stocks_Available - latest_usage.No_of_Packs_Needed
WHERE reagentdata.Lot_No = latest_usage.Lot_No;




-- Rename table  usagetbale to usageTable	

INSERT INTO usageTable 
(Analyte, Reagent_Name, Lot_No, Expiry_Date, Stocks_Available, No_of_Packs_Needed, Technician_Name, CurrentDate) 
VALUES 
('kali', 'glucse', '12AB', '2024-12-31', 100, 2, 'John Doe', NOW());