import dbConfig from "../dbConfig.js";

const createTestDoneTable = (req, res) => {
<<<<<<< HEAD
=======
  // console.log(res)
  // console.log(req.body, " output from test done frontend");
>>>>>>> 64ae26d1766c226aef40365ac21aca636b8094fb
  const colDate = req.body.CurrentDate;
  const colNo = colDate.split("-");
  console.log(colDate.split("-"));
  const year = parseInt(colNo[0]);
  const Month = parseInt(colNo[1]);
  const DateNo = parseInt(colNo[2]);
<<<<<<< HEAD
  console.log(Month, "month");
  console.log(req.body.Analyte_Name, "name");
  const values = [req.body.Analyte_Name, req.body.TestDoneCount, Month, year];
  const existQuery = `
  SELECT EXISTS(
    SELECT 1 
    FROM test_done 
    WHERE Month = ? 
      AND Analyte_Name = ?
  ) AS month_exists
`;

  // "SELECT EXISTS(SELECT 1 FROM test_done WHERE Month = ? AND Analyte_Name = ?) AS record_exists;";

  const existValue = [Month , req.body.Analyte_Name];

  dbConfig.query(existQuery,existValue, (err, data) => {
    if (err) {
      console.log(err.message, "error message from 27 line");
=======
  console.log(Month);
  const values = [req.body.Analyte_Name, req.body.TestDoneCount, Month, year];
  const existQuery =
    "SELECT EXISTS(SELECT 1 FROM test_done WHERE Month = ?) AS month_exists;";
  const existValue = [Month];
  dbConfig.query(existQuery, existValue, (err, data) => {
    if (err) {
>>>>>>> 64ae26d1766c226aef40365ac21aca636b8094fb
      return res.status(400).send(err.message);
    } else {
      const MonthBoolean = data[0].month_exists;
      console.log(MonthBoolean, "exist or not ");
      if (MonthBoolean > 0) {
<<<<<<< HEAD
        UpdateTestFormTable([...values, req.body.Analyte_Name], DateNo);
=======
        UpdateTestFormTable([...values,req.body.Analyte_Name], DateNo);
>>>>>>> 64ae26d1766c226aef40365ac21aca636b8094fb
      } else {
        CreateNewTestForm(values, DateNo);
      }
    }
<<<<<<< HEAD
  });
=======
  }); 
>>>>>>> 64ae26d1766c226aef40365ac21aca636b8094fb

  const CreateNewTestForm = (datas, col) => {
    const query = `INSERT INTO Test_Done (Analyte_Name, col${col} ,Month, Year) VALUES (?);`;
    dbConfig.query(query, [datas], (err, data) => {
      if (err) {
        console.log(err.message);
        return res.status(400).send(err.message);
      }
      return res.status(200).json(data);
    });
  };

  // const UpdateTestFormTable = (datas, col) => {
  //   // ["kavi", "20", 8, 2024];
  //   // const updateQuery = `UPDATE test_done SET col${col}= ? WHERE  Analyte_Name = ?`;
  //   const updateQuery = `UPDATE test_done SET Analyte_Name = ?, col${col} = ?, Month = ?, Year = ? WHERE Analyte_Name = ?`;
  //   console.log(datas);
  //   dbConfig.query(updateQuery,[...datas], (err, data) => {
  //     if (err) {
  //       console.log(err.message);
  //       return res.status(400).send(err.message);
  //     } else {
  //       console.log("sucessto the database");
  //       return res.status(200).json(data);
  //     }
  //   });
  // };
<<<<<<< HEAD

  const UpdateTestFormTable = (datas, col) => {
    // Ensure datas array has the correct order:
    // datas = ["newAnalyteName", colValue, month, year, "oldAnalyteName"];

    const updateQuery = `UPDATE test_done SET Analyte_Name = ?, col${col} = ?, Month = ?, Year = ? WHERE Analyte_Name = ?`;
    console.log(updateQuery, "update the query");
    console.log(datas); // Log the data being passed for debugging

    dbConfig.query(updateQuery, [...datas], (err, data) => {
      if (err) {
        console.log(err.message);
        return res.status(400).send(err.message);
      } else {
        console.log("Success to the database");
        return res.status(200).json(data);
      }
    });
  };
=======
  
  
  const UpdateTestFormTable = (datas, col) => {
    // Ensure datas array has the correct order:
    // datas = ["newAnalyteName", colValue, month, year, "oldAnalyteName"];
    
    const updateQuery = `UPDATE test_done SET Analyte_Name = ?, col${col} = ?, Month = ?, Year = ? WHERE Analyte_Name = ?`;
    console.log(updateQuery,"update the query")
    console.log(datas); // Log the data being passed for debugging

    dbConfig.query(updateQuery, [...datas], (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(400).send(err.message);
        } else {
            console.log("Success to the database");
            return res.status(200).json(data);
        }
    });
}

>>>>>>> 64ae26d1766c226aef40365ac21aca636b8094fb
};

const getTestDoneTable = (req, res) => {
  const query = "SELECT * FROM reagent_inventory.test_done";

  dbConfig.query(query, (err, data) => {
    if (err) {
      console.log(err.message);
      return res.status(400).send(err.message);
    }
    // console.log(data);
    return res.status(200).json(data);
  });
};

export { createTestDoneTable, getTestDoneTable };
