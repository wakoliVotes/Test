// Editing to include the menu to make the routing to the app

// React and Bootstrap
import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Importing Custom CSS
import "./App.css"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import StudentForm from "./components/StudentForm";
import CreateStudent from "./components/create-student.component";

import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

const checkApp = () => {
  return (
    console.log("Checking for Backend from React App")
  );
}


// App Component

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"}
                  className="nav-link"
                >
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end" >
                <Nav>
                  <Link to={"/create-student"}
                    className="nav-link"
                  >
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/student-list"}
                    className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<StudentForm />} />
                  <Route path="/create-student" element={<CreateStudent />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/student-list" element={<StudentList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;