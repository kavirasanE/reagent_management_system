import express from "express";
import cors from "cors";
import dbConfig from "./dbConfig.js";
import Reagentrouter from "./routes/ReagentTableRouter.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api",Reagentrouter);
app.get("/", (req, res) => {
  res.json("hello this is the message from backend");
});

app.listen(9800, () => {
  console.log("server is listening in 9800");
});
