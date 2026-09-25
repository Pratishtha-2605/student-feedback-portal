const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Feedback = require("./models/feedback");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


// GET all feedback
app.get("/api/feedback", async (req, res) => {
    const feedback = await Feedback.find();
    res.json(feedback);
});


// POST new feedback
app.post("/api/feedback", async (req, res) => {

    console.log("Received body:", req.body);

    const feedback = await Feedback.create({
        name: req.body.name,
        message: req.body.message
    });

    res.json(feedback);
});


// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});