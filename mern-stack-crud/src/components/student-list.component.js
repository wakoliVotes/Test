// This step displays the student details in a table
// We fetch student's data and iterate over it to create table row for every student

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import  StudentTableRow from "./StudentTableRow";

const StudentList = () => {
    // useState, the initial state was an empty array
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:4000/students/students/')
        .then(({ data }) => {
            setStudents(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const DataTable = () => {
        return students.map((res, i) => {
            return <StudentTableRow obj={res} key={i} />
        });
    };
    return (
        <div className="table-wrapper">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll No.</th>
                </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default StudentList;