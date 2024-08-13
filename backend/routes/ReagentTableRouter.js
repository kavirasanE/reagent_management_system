import express from "express";
import dotenv from "dotenv";
import {
  createReagentTableData,
  getReagentTableData,
  UpdateReagentTableData,
} from "../controller/reagentTableController.js";
dotenv.config();
const Reagentrouter = express.Router();

Reagentrouter.post("/createreagent", createReagentTableData)
  .get("/getreagent", getReagentTableData)
  .put("/updatereagent/:id", UpdateReagentTableData);




export default Reagentrouter;
