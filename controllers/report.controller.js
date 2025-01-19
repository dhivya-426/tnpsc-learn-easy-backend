const Report = require("../models/report.model");

// Get all reports
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch reports", details: err.message });
  }
};

// Create a new report
exports.createReport = async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res
      .status(201)
      .json({ message: "Report created successfully", data: report });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to create report", details: err.message });
  }
};
