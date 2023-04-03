import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

const publicPath = join(__dirname, "public");

// Set the MIME type explicitly
express.static.mime.define({'text/javascript': ['js']});

app.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});

app.get("/:filePath(*)", (req, res) => {
  const filePath = req.params.filePath;
  const fileToSend = join(publicPath, filePath);
  res.sendFile(fileToSend);
});

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
