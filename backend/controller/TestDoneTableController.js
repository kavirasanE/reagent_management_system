import dbConfig from "../dbConfig.js";

const createTestDoneTable = (req, res) => {
  console.log(req.body," output from test done frontend");
  const colDate = req.body.CurrentDate;
  const colNo = colDate.split("-");
  console.log(colDate.split("-"));
     let Month =  parseInt(colNo[1]);
     let DateNo = parseInt(colNo[2]);
     console.log(DateNo)
  // setTestDonedata((prev) => ({
  //   ...prev,
  //   [colNo[2]]: parseInt(TestDonedata.TestDoneCount),
  //   ["Month"]: parseInt(colNo[1]),
  // }));
  // console.log(TestDonedata);
  const query = `INSERT INTO Test_Done (Analyte_Name, col${DateNo},Month) VALUES (?);`
  const values =[
    req.body.Analyte_Name,
    req.body.TestDoneCount,
    Month
  ]
  console.log(query )
  dbConfig.query(query,[values],(err,data) => {
    if(err) {
      console.log(err.message);
      return res.status(400).send(err.message)
    }
    return  res.status(200).json(data)
    
  })
};

const getTestDoneTable = (req,res) => {
     const query = "SELECT * FROM reagent_inventory.test_done"

     dbConfig.query(query,(err,data) => {
      if(err) {
        console.log(err.message)
        return res.status(400).send(err.message)
      }
      console.log(data)
      return res.status(200).json(data)
     })
}


export {createTestDoneTable, getTestDoneTable} ;


// {
//   CurrentDate: '2024-08-14',
//   Analyte_Name: 'aljksnclajn',
//   TestDoneCount: '123'
// }  