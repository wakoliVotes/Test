// This section is for updating details
// We have reusable StudentForm component
// We will fetch student details to reinitilise form


// Importing Required Modules
import React, { useEffect, useState } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// Edit Student Component
const EditStudent = (props) => {
    // Use state
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        rollno: "",
    });

    // onSubmit handler
    const onSubmit = (studentObject) => {
        axios.put('http://localhost:4000/students/update-student/' +
            props.match.params.id,
            studentObject
        )
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully updated");
                    props.history.push("/student-list");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went terribly wrong"));
    };

    // Load data from server and reinitialize student form
    useEffect(() => {
        axios.get('http://localhost:4000/students/update-student/'
            + props.match.params.id
        )
            .then((res) => {
                const { name, email, rollno } = res.data;
                setFormValues({ name, email, rollno });
            })
            .catch((err) => console.log(err));
    }, []);   // saves the update in updated list


    // Return the student form upon updating
    return (
        <StudentForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            Update Student
        </StudentForm>
    );
}

// Export EditStudent Component
export default EditStudent;