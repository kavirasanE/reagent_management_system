import dbConfig from "../dbConfig.js";

const createTestDoneTable = (req, res) => {

  // console.log(res)
  // console.log(req.body, " output from test done frontend");

  const colDate = req.body.CurrentDate;
  const colNo = colDate.split("-");
  console.log(colDate.split("-"));
  const year = parseInt(colNo[0]);
  const Month = parseInt(colNo[1]);
  const DateNo = parseInt(colNo[2]);
  console.log(Month);
  const values = [req.body.Analyte_Name, req.body.TestDoneCount, Month, year];
  const existQuery =
    "SELECT EXISTS(SELECT 1 FROM test_done WHERE Month = ?) AS month_exists;";
  const existValue = [Month];
  dbConfig.query(existQuery, existValue, (err, data) => {
    if (err) {
      return res.status(400).send(err.message);
    } else {
      const MonthBoolean = data[0].month_exists;
      console.log(MonthBoolean, "exist or not ");
      if (MonthBoolean > 0) {
        UpdateTestFormTable([...values, req.body.Analyte_Name], DateNo);
      } else {
        CreateNewTestForm(values, DateNo);
      }
    }
  });

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
