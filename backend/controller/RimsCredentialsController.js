import expressAsyncHandler from "express-async-handler";
import dbConfig from "../dbConfig.js";
import bcryptjs from "bcryptjs";

const RegisterTechnician = expressAsyncHandler((req, res) => {
  const { userName, password, email } = req.body;

  if (password) {
    bcryptjs
      .hash(password, 10)
      .then((hashedPassword) => {
        password = hashedPassword;
      })
      .catch((err) => {
        console.log(err, "error from registerTechnician");
      });
  }
  const values = [userName, password, email];
  const query =
    " insert into rimscredentials (`userName` ,`email` , `password`) values(?)";
  dbConfig.query(query, [values], (err, data) => {
    if (err) {
      console.log(err.message, "error message from register form");
      return res.status(400).send(err);
    } else {
      return res.status(201).json(data);
    }
  });
});

const LoginTechnician = (req, res) => {
  
};

export { RegisterTechnician, LoginTechnician };
