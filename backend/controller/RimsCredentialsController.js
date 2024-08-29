import dbConfig from "../dbConfig.js";
import bcryptjs from "bcryptjs";

const RegisterTechnician = async (req, res) => {
  const { userName, password, email } = req.body;
 
  const hashedPassword = await bcryptjs.hash(password, 10);
 
  const existQuery =
    "SELECT EXISTS(SELECT 1 FROM rimscredentials WHERE email = ?) AS email_exists;";
  const existValue = [email];
  dbConfig.query(existQuery, [existValue], (err, data) => {
    if (err) {
      console.log(err.message, "error message from boolean register");
      return res.status(400).send(err);
    } else {
      console.log(data[0].email_exists);
     const emailBoolean = data[0].email_exists;
      if (emailBoolean > 0) {
        return res
          .status(400)
          .json(
            "Email Address is Already present Make sure to use Unique mail address"
          );
      } else {
        const values = [userName, email, hashedPassword];
        const query =
          " insert into rimscredentials (`userName` ,`email` , `password`) values(?)";
        dbConfig.query(query, [values], (err, data) => {
          if (err) {
            console.log(err.message, "error message from register form");
            return res.status(400).send(err);
          } else {
            console.log(data);
            return res.status(201).json(data);
          }
        });
      }
    }
  });

 
};

const LoginTechnician = (req, res) => {
  const { email, password } = req.body;
};

export { RegisterTechnician, LoginTechnician };
