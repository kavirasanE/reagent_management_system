import dotenv from "dotenv";
import mysql from "mysql";

// if any error for auth problem in the 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Chennai@123';
// FLUSH PRIVILEGES;
// SHOW GRANTS FOR 'root'@'localhost';
dotenv.config();
const dbConfig = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE_NAME,
});

dbConfig.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Connected to the database");
});

export default dbConfig;
