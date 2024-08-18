import dbConfig from "../dbConfig.js";

const createUsageTableData = (req, res) => {
    const usageId = req.params.id;
    console.log(usageId,"usage if")
  const currentdate = new Date();
  // const query =
  //   " INSERT INTO usageTable (Analyte, Reagent_Name, Lot_No, Expiry_Date, Stocks_Available, No_of_Packs_Needed, Technician_Name, CurrentDate) VALUES (?)";

  const query =
  "UPDATE reagentdata SET `Analyte` = ?, `Reagent_Name` = ?, `Lot_No` = ?, `Expiry_Date` = ?, `Stocks_Available` = ?, `No_of_Packs_Used` = ?, `Technician_Name` = ?, `currentdate` = ? WHERE id = ? " ;

  console.log(req.body);
 
  const values = [
    req.body.Analyte,
    req.body.Reagent_Name,
    req.body.Lot_No,
    req.body.Expiry_Date,
    req.body.Stocks_Available,
    req.body.No_of_Packs_Used,
    req.body.Technician_Name,
    currentdate,
  ];

  // console.log(values, "values from the usage  data form from the backend");

  dbConfig.query(query, [...values,usageId], (err, data) => {
    if (err) {
      console.log(err.message,"message on 29 usageformcontroller");
      return res.status(400).send(err.message, "message from createUsageTableData");
    } else {
      return res.status(201).json(data);
    }
  });
};

export default createUsageTableData;
