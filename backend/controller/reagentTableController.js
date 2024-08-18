import asyncHandler from "express-async-handler";
import dbConfig from "../dbConfig.js";

const createReagentTableData = (req, res) => {
  const currentdate = new Date();
  const query =
    " insert into reagentdata (`Analyte`, `Reagent_Name`, `Lot_No` ,`Expiry_Date`,`Stocks_Available`, `new_stock`, `Technician_Name`, `currentdate`) values (?)";

  const query1 =
    " insert into historyreagentdata (`Analyte`, `Reagent_Name`, `Lot_No` ,`Expiry_Date`,`Stocks_Available`, `new_stock`, `Technician_Name`, `currentdate`) values (?)";

  const values = [
    req.body.Analyte,
    req.body.Reagent_Name,
    req.body.Lot_No,
    req.body.Expiry_Date,
    req.body.Stocks_Available, // Corrected property name
    req.body.new_stock,
    req.body.Technician_Name,
    currentdate, // Added currentdate based on column list
  ];

  console.log(values);

  dbConfig.query(query, [values], (err, data) => {
    if (err) {
      console.log(err.message);
      return res.send(err, "err from th");
    }
    return res.status(201).json(data);
  });

  dbConfig.query(query1, [values], (err1, data1) => {
    if (data1) {
      //  return res.status(201).json(data1);
      console.log("hlo");
    }
  });
};

const getReagentTableData = (req, res) => {
  // const query = "SELECT * FROM reagent_inventory.reagentdata";
  // const query = "SELECT r.id, r.Analyte, r.Reagent_Name, r.Lot_No, r.Technician_Name, r.Expiry_Date,(r.Stocks_Available - COALESCE(u.No_of_Packs_Needed, 0)) AS Stocks_Available, COALESCE(u.No_of_Packs_Needed, 0) AS No_of_Packs_Needed, COALESCE(u.CurrentDate, r.currentdate) AS CurrentDate FROM reagentdata r LEFT JOIN (SELECT Lot_No, MAX(CurrentDate) AS LatestDate FROM usagetable GROUP BY Lot_No) subquery ON r.Lot_No = subquery.Lot_No LEFT JOIN usagetable u ON r.Lot_No = u.Lot_No AND u.CurrentDate = subquery.LatestDate;";

    // "SELECT r.id, r.Analyte, r.Reagent_Name, r.Lot_No, r.Technician_Name, r.Expiry_Date, COALESCE(u.Stocks_Available, r.Stocks_Available) AS Stocks_Available, COALESCE(u.No_of_Packs_Needed, 0) AS No_of_Packs_Needed, COALESCE(u.CurrentDate, r.currentdate) AS CurrentDate FROM reagentdata r LEFT JOIN (SELECT Lot_No, MAX(CurrentDate) AS LatestDate FROM usagetable GROUP BY Lot_No) subquery ON r.Lot_No = subquery.Lot_No LEFT JOIN usagetable u ON subquery.Lot_No = u.Lot_No AND subquery.LatestDate = u.CurrentDate;";

   const query = "SELECT r.id, r.Analyte, r.Reagent_Name, r.Lot_No, r.Technician_Name, r.Expiry_Date,(r.Stocks_Available - COALESCE(u.No_of_Packs_Needed, 0)) AS Stocks_Available, r.Stocks_Available as Total_Stocks, COALESCE(u.No_of_Packs_Needed, 0) AS No_of_Packs_Needed, COALESCE(u.CurrentDate, r.currentdate) AS CurrentDate FROM reagentdata r LEFT JOIN (SELECT Lot_No, MAX(CurrentDate) AS LatestDate FROM usagetable GROUP BY Lot_No) subquery ON r.Lot_No = subquery.Lot_No LEFT JOIN usagetable u ON r.Lot_No = u.Lot_No AND u.CurrentDate = subquery.LatestDate;"
   
  dbConfig.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      return res.status(200).json(data);
    }
  });
};

const UpdateReagentTableData = (req, res) => {
  const reagentId = req.params.id;
  console.log(reagentId);
  const currentdate = new Date();
  const query =
    " UPDATE reagentdata SET `Analyte` = ? , `Reagent_Name` = ? , `Lot_No` = ? ,`Expiry_Date` = ? ,`Stocks_Available` = ?, `new_stock` = ? , `Technician_Name` = ?, `currentdate` = ? WHERE id = ? ";
  console.log(req.body);

  const query1 =
    " insert into historyreagentdata (`Analyte`, `Reagent_Name`, `Lot_No` ,`Expiry_Date`,`Stocks_Available`, `new_stock`, `Technician_Name`, `currentdate`) values (?)";
  const values = [
    req.body.Analyte,
    req.body.Reagent_Name,
    req.body.Lot_No,
    req.body.Expiry_Date,
    req.body.Stocks_Available, // Corrected property name
    req.body.new_stock,
    req.body.Technician_Name,
    currentdate, // Added currentdate based on column list
  ];
  dbConfig.query(query, [...values, reagentId], (err, data) => {
    if (err) {
      console.log(err, "update reagent ");
    }
    console.log(data);
    res.status(200).json(data);
  });
  dbConfig.query(query1, [values], (err1, data1) => {
    if (err1) {
      console.log(err1.message, "message from history");
      console.log("data is add  in the historydata table");
    }
  });
};

export { createReagentTableData, getReagentTableData, UpdateReagentTableData };
