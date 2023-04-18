import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import User from "./src/models/user.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __publicPath = join(__dirname, "public");

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

// Set the MIME type explicitly
express.static.mime.define({ "text/javascript": ["js"] });

app.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    res.status(200).json("user added successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
      password: password,
    });

    if (user) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        process.env.ACCESS_KEY,
        { expiresIn: "1h" }
      );

      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    res.json({ status: "error", error: "TODO: handle error" });
  }
});

app.get("/:filePath(*)", (req, res) => {
  const filePath = req.params.filePath;
  const fileToSend = join(__publicPath, filePath);
  res.sendFile(fileToSend);
});

app.get("/*", function (req, res) {
  const index = join(__publicPath, "index.html");
  res.sendFile(index);
});
