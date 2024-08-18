SELECT 
    r.id,
    r.Analyte,
    r.Reagent_Name,
    r.Lot_No,
    r.Technician_Name,
    r.Expiry_Date,
   COALESCE(u.Stocks_Available, r.Stocks_Available) AS Stocks_Available,
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
    ) subquery
ON 
    r.Lot_No = subquery.Lot_No
LEFT JOIN 
    usagetable u
ON 
    subquery.Lot_No = u.Lot_No AND subquery.LatestDate = u.CurrentDate;
    
    --  COALESCE(u.Stocks_Available, r.Stocks_Available) AS Stocks_Available, 
