const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const Question = require("./Models/Question");
const quizRoutes = require("./Routes/QuizRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = process.env.MONGO_URI;

mongoose.connect(db).then(() => {
    console.log("Successfully connected to MongoDB...");
    importQuestions();
}).catch(err => console.log("Some error in connecting to MongoDB: ",err));

const importQuestions = async () => {
    try {
        const count = await Question.countDocuments();
        if (count === 0) {
            console.log("Database is empty. Importing initial questions...");

            const easyData = require("./Data/EasyQuestions.json");
            const mediumData = require("./Data/MediumQuestions.json");
            const hardData = require("./Data/HardQuestions.json");

            await Question.insertMany([...easyData, ...mediumData, ...hardData]);
            console.log("Question imported successfully.");
        } else {
            console.log("Questions already exist in DB.");
        }
    } catch (error) {
        console.error("Error importing questions:", error)
    }
};

app.use("/api/quiz", quizRoutes);

const port = process.env.PORT || 1001;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});