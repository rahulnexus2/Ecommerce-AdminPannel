import express from "express";
import cors from "cors";
import ConnectDb from "./config/db.js";
import config from "./config/config.js";

const app = express();
const port = config.port;

app.get("/", (req, res) => {
  res.send("welcome to home page ");
});

const startServer = async () => {
  await ConnectDb();

  app.listen(port, () => {
    console.log(`app is listening at port:${port}`);
    console.log("Started app Server");
  });
};
startServer();
