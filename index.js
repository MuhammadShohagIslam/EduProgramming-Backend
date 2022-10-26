const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
const corsOptions = {
    origin: "*",
    credentials: true,
};

app.use([
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    cors(corsOptions),
]);

const courses = require("./data/courses.json");
const blogs = require("./data/blog.json");
const faq = require("./data/faq.json");

app.get("/", (req, res) => {
    res.json("EduProgramming World");
});

// get all courses
app.get("/courses", (req, res) => {
    res.json(courses);
});

// get single course
app.get("/courses/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const course = courses.find((course) => course.id === courseId);
    res.json(course);
});

// get all blogs
app.get("/blogs", (req, res) => {
    res.json(blogs);
});

// get all faq
app.get("/faq", (req, res) => {
    res.json(faq);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("server is running on port 5000");
});
