const Question = require("../models/question.model");

// Get all questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find(req.query);
    if (questions.length === 0) {
      return res.status(404).json({ error: "No questions found" });
    }
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch questions",
      details: err.message,
    });
  }
};

// Create new questions
exports.createQuestions = async (req, res) => {
  try {
    if (!Array.isArray(req.body) || req.body.length === 0) {
      return res.status(400).json({
        error: "Invalid data format",
        details: "Request body should be an array of question objects",
      });
    }

    const questions = await Question.insertMany(req.body);
    res.status(201).json({
      message: "Questions created successfully",
      data: questions,
    });
  } catch (err) {
    res.status(400).json({
      error: "Invalid data",
      details: err.message,
    });
  }
};

// Get random questions from different subjects
exports.getRandomQuestions = async (req, res) => {
  const subjectArray = [
    "polity",
    "inm",
    "biology",
    "chemistry",
    "economy",
    "geography",
    "history",
    "physics",
  ];

  let outData = [];
  try {
    for (const subject of subjectArray) {
      const questions = await Question.aggregate([
        { $match: { subject: subject } },
        { $sample: { size: 10 } },
        {
          $project: {
            question: 1,
            option1: 1,
            option2: 1,
            option3: 1,
            option4: 1,
            answer: 1,
          },
        },
      ]);

      outData.push(...questions);
    }

    outData = outData.sort(() => Math.random() - 0.5);

    res.status(200).json(outData);
  } catch (err) {
    res.status(500).json({
      error: "Error fetching random questions",
      details: err.message,
    });
  }
};

// Get questions by topic
exports.getQuestionsByTopic = async (req, res) => {
  try {
    const questions = await Question.find({ topic: req.params.topic });

    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch questions by topic",
      details: err.message,
    });
  }
};
