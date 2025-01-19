const express = require("express");
const router = express.Router();
const reportController = require("../controllers/report.controller");

// Get all reports
router.get("/", reportController.getAllReports);

// Create a new report
router.post("/", reportController.createReport);

module.exports = router;
