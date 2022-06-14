// Create student component to add new student

// Import modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component

const CreateStudent = () => {
    // useState
    const [formValues, setFormValues] = useState({name: '', email: '', rollno: ''})

    // onsubmit handler
    const onSubmit = studentObject => {
        axios.post(
            'http://localhost:4000/students/create-student',
            studentObject)
            .then(res => {
                if (res.status === 200)
                alert('Student successfully created')
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went horribly wrong'))
    }
    // Return student form
    return (
        <StudentForm initialValues ={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        CreateStudent

        </StudentForm>
    )
}
// Export CreateStudent Component
export default CreateStudent;