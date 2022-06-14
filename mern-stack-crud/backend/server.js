const express = require("express");
const createStudent = require("./routes/createstudent");
const getStudent = require("./routes/getstudent");
const updateStudent = require("./routes/updatestudent");
const deleteStudent = require("./routes/deletestudent");
const connectdb = require("./utils/connectdb");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//_------------------ APIS--------------- //
app.use("/create_student", createStudent);
app.use("/get_student/:id", getStudent);
app.use("/update_student/:id", updateStudent);
app.use("/delete_student/:id", deleteStudent);

// -------------------APIS----------------/
// PORT
const port = 4000;
app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`)
  await connectdb();
});
