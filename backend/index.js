import express from "express";
import cors from "cors";
import Reagentrouter from "./routes/ReagentTableRouter.js";
import RimsCredentials from "./routes/RimsCredentailsRouter.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api",Reagentrouter);
app.use("/welcome",RimsCredentials)
app.get("/", (req, res) => {
  res.json("hello this is the message from backend");
});

app.listen(9800, () => {
  console.log("server is listening in 9800");
});
