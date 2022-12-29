const express = require("express");
const app = express();
const fs = require('fs');

//getting data from database
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));


app.get("/api/v1/", (req, res) => {
  res.status(200).json({
    status: "success",
      data
  });
});

app.post('api/v1/', (req, res) => {
    
})

// for server functionality!
const port = process.env.PORT || 3020;
app.listen(port, () => {
  console.log("server is running");
});
