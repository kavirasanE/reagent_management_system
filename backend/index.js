import express from "express";
import cors from "cors"
import dbConfig from "./dbConfig.js";
const app = express();
app.use(express.json());
app.use(cors())



// if there is an auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Chennai@123';



app.get("/books", (req, res) => {
  const q = "select * from reagent_inventory.books";
  dbConfig.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/booksdata", (req, res) => {
  const q =
    "INSERT INTO reagent_inventory.books (`title`, `description`) VALUES(?)";
  const VALUES = [req.body.title, req.body.description];
  //   const VALUES = ["title from backend", "description from backend"];
  dbConfig.query(q, [VALUES], (err, data) => {
    if (err) {
      return res.json(err);
    }
    // return res.json(data);
    return res.json("books has been created sucessfully");
  });
});

app.get("/", (req, res) => {
  res.json("hello this is the message from backend");
});

app.listen(9800, () => {
  console.log("server is listening in 9800");
});
