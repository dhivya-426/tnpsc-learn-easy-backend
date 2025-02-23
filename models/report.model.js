const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  email: { type: String, required: true },
  description: { type: String},
  question: { type: String, required: true },
  reason: { type: String, required: true },
  resolvedStatus: { type: String, required: true},
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
