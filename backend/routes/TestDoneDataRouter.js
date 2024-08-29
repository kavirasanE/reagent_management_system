import express from "express";
import dotenv from "dotenv";
import {
  createTestDoneTable,
  getTestDoneTable,
} from "../controller/TestDoneTableController.js";

dotenv.config();

const TestDoneFormTable = express.Router();

TestDoneFormTable.post("/testDoneform", createTestDoneTable).get(
  "/testdoneData",
  getTestDoneTable
);

export default TestDoneFormTable;
