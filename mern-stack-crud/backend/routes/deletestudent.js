const express = require("express");
const Student = require("../models/Student");
const Router = express.Router();

Router.delete("/", (req, res) => {
  const { rollno } = req.params;

  const user = Student.findById(rollno);
  if (user) {
    user.delete();
    res.status(200).json({ message: "student deleted successfully" });
  } else {
    res.status(404).json({ errorMessage: "student not found" });
  }
});

module.exports = Router;
