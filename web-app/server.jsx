const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/bundle.jsx", (req, res) => {
  res.type("text/javascript");
  res.sendFile(__dirname + "/public/bundle.jsx");
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/public/favicon.ico");
});
