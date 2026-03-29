const express = require("express");

const app = express();
const port = 3000;

//in memory data
let student =[
    {id: 1, name: "djabal"},
    {id: 2, name: "tugz"},
];

//fetch all students
app.get("/", (req,res) => {
    res.send("Project intro");
});

//fetching a specific student
app.get("/student/:id/school/:name", (req,res) =>{
    const { id, name} = req.params;
    const student = student.find(s => s.id === parseInt(id) && s.school === name);
    if (!student) {
        return res.status(404).json({ error: "Student not found"})
    }
    res.json(student);
});

//create students
app.post("/students", (req,res) => {
    const { name } = req.body;
    const newStudent = { id: student.length + 1, name, school };
    student.push(newStudent);
    res.status(201).json(newStudent);
});

//update student
app.put("/student/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    students = students.ma(s.id === id ? { ...s, ...req.body } : s);
    console.log({...req.body});
});

//Delete student
app.delete("/student/:id", (req, res) => {
    const id = parseInt(id);
    students = students.filter(s => s.id !== id);
    res.status(200).json({message: "Deleted student successfully,students: student"})
})

app.listen(port, () => {
    console.log('server is running on http://localhost:' + port);
})