import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import User from "./src/models/user.model.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = join(__dirname, "public");

const app = express();
const port = 3000;

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/fisiomanagerdb')

// Set the MIME type explicitly
express.static.mime.define({'text/javascript': ['js']});

app.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});

app.post('/api/register', async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    res.json({status: 'ok'})    
  }
  catch(err) {
    res.json({status: 'error', error: 'TODO: handle error'})
  }
})

app.post('/api/login', async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.findOne({ 
      email: req.body.email, 
      password: req.body.password,
    })

    if(user) {
      const token = jwt.sign({
        name : user.name,
        email: user.email,
      }, 'secretToChange')

      return res.json({ status: 'ok', user: token })
    }
    else {
      return res.json({ status: 'error',  user: false})
    }

  }
  catch(err) {
    res.json({status: 'error', error: 'TODO: handle error'})
  }
})

app.get("/:filePath(*)", (req, res) => {
  const filePath = req.params.filePath;
  const fileToSend = join(publicPath, filePath);
  res.sendFile(fileToSend);
});

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
