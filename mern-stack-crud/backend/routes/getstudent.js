const express = require("express");
const Student = require("../models/Student");
const Router = express.Router();

Router.get("/", (req, res) => {
  const { rollno } = req.params;
  const user = Student.findById(rollno);
  if (user) {
    res.status(200).json({ student: user });
  } else {
    res
      .status(404)
      .json({ errorMessage: "student with that id does not exist" });
  }
});

module.exports = Router;