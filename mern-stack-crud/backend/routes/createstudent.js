const express = require("express");
const Student = require("../models/Student");
const Router = express.Router();

Router.post("/", async (req, res) => {
  const { email, rollno, name } = req.body;
  const user = Student.findOne({ email });
  if (user) {
    res.status(500).json({ errorMessage: "student already exist" });
    return;
  }
  user = new Student({
    email: email,
    rollno: rollno,
    name: name,
  });
  
  await user.save();
});

module.exports = Router;