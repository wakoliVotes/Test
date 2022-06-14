const express = require("express");
const Student = require("../models/Student");
const Router = express.Router();

Router.put("/", async(req, res) => {
  const { rollno } = req.params;
  const user = Student.findById(rollno);
  
  if(user){
     user = new Student({
         name:req.body.name,
         rollno:req.body.rollno,
         email:req.body.email
     })
     await user.save()
  }
});


module.exports = Router;