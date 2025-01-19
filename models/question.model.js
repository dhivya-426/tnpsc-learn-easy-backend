const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String, required: true },
  option4: { type: String, required: true },
  answer: { type: String, required: true },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
