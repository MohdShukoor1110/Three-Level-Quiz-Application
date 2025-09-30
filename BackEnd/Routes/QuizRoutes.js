const express = require("express");
const router = express.Router();
const Question = require("../Models/Question");

router.get("/:level", async(req, res) => {
    try {
        const level = req.params.level.toLowerCase();

        if (!["easy", "medium", "hard"].includes(level)) {
            return res.status(400).json({ msg: "Invalid difficulty level given." });
        }

        const questions = await Question.find({difficulty: level});

        if (questions.length === 0) {
            return res.status(404).json({ msg: `No ${level} questions found.` });
        }

        const safeQuestions = questions.map(q => ({
            id: q.id,
            text: q.text,
            options: q.options,
            difficulty: q.difficulty
        }));

        res.json(safeQuestions);
    } catch (err) {
        console.error("Some error at Quiz Route", err.message);
        res.status(500).send("Server Error");
    }
});

router.post('/submit', async (_, res) => {
    res.json({ msg: "Quiz submitted successfully!" });
});

module.exports = router;