import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

app.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});

app.get("/bundle.jsx", (req, res) => {
  res.type("text/jsx");
  res.sendFile(__dirname + "/public/bundle.jsx");
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/public/favicon.ico");
});

app.get("/images/logo.svg", (req, res) => {
  res.sendFile(__dirname + "/public/images/logo.svg");
});

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
