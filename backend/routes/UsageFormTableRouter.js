import express from "express"
import dotenv from "dotenv"
import createUsageTableData from "../controller/UsageFormTableController.js";


dotenv.config();

const UsageFormTable = express.Router();

UsageFormTable.put("/createusageform/:id",createUsageTableData)

export default UsageFormTable