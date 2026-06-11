const express = require("express");
const app = express();

app.use(express.json()); 

let students = [
    { id: 1, name: "Kunal", course: "BCA", city: "Dehradun", fees: 45000 },
    { id: 2, name: "Aman", course: "MCA", city: "Delhi", fees: 60000 },
    { id: 3, name: "Riya", course: "BCA", city: "Noida", fees: 35000 },
    { id: 4, name: "Priya", course: "BTech", city: "Delhi", fees: 80000 },
    { id: 5, name: "Rohit", course: "MCA", city: "Lucknow", fees: 50000 }
];


// 1. Welcome Message

app.get("/", (req, res) => {
    res.send("Welcome to Express.js Student Management System");
});


//  2. Fetch All Students

app.get("/students", (req, res) => {
    res.json(students);
});

// 3. Fetch Student By ID

app.get("/students/:id", (req, res) => {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return res.json(students[i]);
        }
    }

    res.send("Student not found");
});


// 4. Add New Student

app.post("/students", (req, res) => {
    students.push(req.body);

    res.send("Student Added Successfully");
});


// 5. Delete Student By ID

app.delete("/students/:id", (req, res) => {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);

            return res.send("Student Deleted Successfully");
        }
    }

    res.send("Student not found");
});