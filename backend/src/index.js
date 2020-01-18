const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://azagatti:azagatti@cluster0-ycnoo.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  return res.send({ message: "Hello World" });
});

app.listen(3333);
