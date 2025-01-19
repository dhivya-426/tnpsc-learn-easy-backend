const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

// Get a list of all contacts
router.get("/", contactController.getAllContacts);

// Create a new contact message
router.post("/", contactController.createContact);

module.exports = router;
