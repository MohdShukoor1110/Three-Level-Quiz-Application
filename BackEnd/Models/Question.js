const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    id: { type: Number, required:true },
    text: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: String, required: true },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], required: true }
});

module.exports = mongoose.model("Question", QuestionSchema)