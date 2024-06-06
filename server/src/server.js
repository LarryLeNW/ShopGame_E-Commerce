const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const initWebRoutes = require("./route/index");
const connectDB = require("./config/connectDB");
const app = express();

require("dotenv").config();
// Configure app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.IP_CLIENT,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.get("/", (req, res, next) => {
  res.send("Api's ready to use...");
});

app.use("/Images", express.static("Images"));
app.use(cookieParser());
app.use(express.static("Images"));

initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Backend Node.js is running on port: " + port);
});
