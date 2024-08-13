import dbConfig from "../dbConfig.js";

const createUsageTableData = (req, res) => {

  console.log(req.body,"from createUsageTableData")
  const currentdate = new Date();
  const query =
    " INSERT INTO usageTable (Analyte, Reagent_Name, Lot_No, Expiry_Date, Stocks_Available, No_of_Packs_Needed, Technician_Name, CurrentDate) VALUES (?)";
  const values = [
    req.body.Analyte,
    req.body.Reagent_Name,
    req.body.Lot_No,
    req.body.Expiry_Date,
    req.body.Stocks_Avaliable,
    req.body.No_of_Packs_Needed,
    req.body.Technician_Name,
    currentdate
  ];

  console.log(values,"values from the usage  data form from the backend")

  dbConfig.query(query,[values] , (err,data) => {
    if(err) {
        console.log(err.message)
        return res.status(400).send(err.message,"message from createUsageTableData")
    }
    else{
        return res.status(201).json(data);
    }
  })


};

export default createUsageTableData;
