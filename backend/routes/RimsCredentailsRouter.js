import express from "express";
import dotenv from "dotenv";
import {
  LoginTechnician,
  RegisterTechnician,
} from "../controller/RimsCredentialsController.js";

dotenv.config();

const RimsCredentials = express.Router();

RimsCredentials.post("/register", RegisterTechnician).get(
  "/login",
  LoginTechnician
);

export default RimsCredentials;
