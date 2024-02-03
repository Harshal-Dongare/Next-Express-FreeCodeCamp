const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});


const port = 5000;
app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }
  console.log(`Server is listening on ${port}...`);
});

