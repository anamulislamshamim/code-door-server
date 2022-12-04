// cors
const cors = require("cors");
const express = require("express");
const app = express();

// setup cors or resource origin policy so that any one get access to the server:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const courses = require("./data/fakedata.json");

app.get("/", (req, res) => {
    res.status(200).json({message:"Welcome to the server"});
});

app.get("/courses", ( req, res) => {
    res.status(200).send(courses);
});

app.get("/courses/:categoryId", (req, res) => {
    const categoryCourses = courses.filter(course => course.category_id == req.params.categoryId);
    res.status(200).send(categoryCourses);
});

app.get("/courses/course/:id", (req, res) => {
    const course = courses.find(course => course.id == req.params.id);
    res.status(200).send(course);
})




module.exports = app;