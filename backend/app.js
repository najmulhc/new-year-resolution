const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());

//getting data from database
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

app.get("/api/v1/", (req, res) => {
  res.status(200).json({
    status: "success",
    data,
  });
});

app.post("/api/v1/", (req, res) => {
  const resolution = req.body;
  data.push(resolution);
  const dataToWrite = JSON.stringify(data);
  fs.writeFile(`${__dirname}/data.json`, dataToWrite);
  res.status(200).json({
    status: "success",
    data,
  });
});

// for server functionality!
const port = 3020;
app.listen(port, () => {
  console.log("server is running", port);
});
