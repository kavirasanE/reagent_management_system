UPDATE reagentdata r
LEFT JOIN (
    SELECT 
        Lot_No, 
        SUM(No_of_Packs_Needed) AS Total_Packs_Used,
        MAX(CurrentDate) AS LatestDate
    FROM 
        usagetable
    GROUP BY 
        Lot_No
) u ON r.Lot_No = u.Lot_No
SET r.Stocks_Available = r.Stocks_Available - COALESCE(u.Total_Packs_Used, 0) + COALESCE(r.new_stock, 0)
WHERE r.Lot_No = u.Lot_No OR r.new_stock > 0;

select * from regentdata;

SET SQL_SAFE_UPDATES = 0;
