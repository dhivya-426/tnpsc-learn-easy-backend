const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question.controller");

// Get a list of all questions
router.get("/", questionController.getAllQuestions);

// Create new questions
router.post("/", questionController.createQuestions);

// Get random questions from different subjects
router.get("/random", questionController.getRandomQuestions);

// Get questions by topic
router.get("/topic/:title/:topic", questionController.getQuestionsByTopic);

module.exports = router;
