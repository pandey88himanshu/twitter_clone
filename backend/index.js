const express = require("express");
require("dotenv").config();
require("./connection/config");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Running on " + process.env.PORT);
});
