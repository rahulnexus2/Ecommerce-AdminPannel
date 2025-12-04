import express from "express";
import cors from "cors";
import ConnectDb from "./config/db.js";
import config from "./config/config.js";
import adminRoute from "./routes/adminRoute.js"


const app = express();
const port = config.port;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("welcome to home page ");
});



app.use("/api/v1/admin",adminRoute)
//app.use("/api/v1/user",userRoute);











const startServer = async () => {
  await ConnectDb();

  app.listen(port, () => {
    console.log(`app is listening at port:${port}`);
    console.log("Started app Server");
  });
};
startServer();

