const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Student Model
const studentSchema = require("../models/Student", console.log("Checking for Backend from Express Routes"));

// CREATE Student
router.post("/create-student", (req, res, next) => {
    studentSchema.create(req, res, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// READ Students
router.get("/", (req, res) => {
    studentSchema.find((error, data) => {
        if(error){
            return next(error);
        } else {
            console.log(data)
        }
    })
});

// UPDATE Student 
router.route("/update-student/:id")
// Get Single Student
.get((req, res) => {
    studentSchema.findById(
        req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        });
})

// UPDATE Student Data
router.put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
                console.log(error);
            } else {
                res.json(data);
                console.log("Student updated successfully !");
            }
        }
    );
});

// DELETE Student
router.delete('/delete-student/:id', (req, res, next) =>{
    req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    };
});

module.exports = router;