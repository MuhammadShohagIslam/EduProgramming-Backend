const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
app.use([
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    cors(),
]);

const courses = require("./data/courses.json");

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

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is running on port 5000");
});
