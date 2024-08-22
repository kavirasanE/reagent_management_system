import express from "express";
import cors from "cors";
import Reagentrouter from "./routes/ReagentTableRouter.js";
import RimsCredentials from "./routes/RimsCredentailsRouter.js";
import UsageFormTable from "./routes/UsageFormTableRouter.js";
import TestDoneFormTable from "./routes/TestDoneDataRouter.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api", Reagentrouter);
app.use("/welcome", RimsCredentials);
app.use("/api", UsageFormTable);
app.use("/testdone", TestDoneFormTable);

app.get("/", (req, res) => {
  res.json("hello this is the message from backend");
});

app.listen(process.env.PORT, () => {
  console.log("server is listening in 9800");
});
