SELECT 
    r.id,
    r.Analyte,
    r.Reagent_Name,
    r.Lot_No,
    r.Technician_Name,
    r.Expiry_Date,
    (r.Stocks_Available - COALESCE(u.No_of_Packs_Needed, 0)) AS Stocks_Available,
    r.Stocks_Available as Total_Stocks,
    COALESCE(u.No_of_Packs_Needed, 0) AS No_of_Packs_Needed,
    COALESCE(u.CurrentDate, r.currentdate) AS CurrentDate
FROM 
    reagentdata r
LEFT JOIN 
    (
        SELECT 
            Lot_No, 
            MAX(CurrentDate) AS LatestDate
        FROM 
            usagetable
        GROUP BY 
            Lot_No
    ) subquery ON r.Lot_No = subquery.Lot_No
LEFT JOIN 
    usagetable u ON r.Lot_No = u.Lot_No AND u.CurrentDate = subquery.LatestDate;
    
    CREATE TABLE stock_summary AS
SELECT 
    r.id,
    r.Analyte,
    r.Reagent_Name,
    r.Lot_No,
    r.Technician_Name,
    r.Expiry_Date,
	r.Stocks_Available AS Total_Stocks,
    (r.Stocks_Available - COALESCE(u.No_of_Packs_Needed, 0)) AS Stocks_Available,
  
    COALESCE(u.No_of_Packs_Needed, 0) AS No_of_Packs_Needed,
    COALESCE(u.CurrentDate, r.currentdate) AS CurrentDate
FROM 
    reagentdata r
LEFT JOIN 
    (
        SELECT 
            Lot_No, 
            MAX(CurrentDate) AS LatestDate
        FROM 
            usagetable
        GROUP BY 
            Lot_No
    ) subquery ON r.Lot_No = subquery.Lot_No
LEFT JOIN 
    usagetable u ON r.Lot_No = u.Lot_No AND u.CurrentDate = subquery.LatestDate;
    
    select * from stock_summary;


    
    
    
