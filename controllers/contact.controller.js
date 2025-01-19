const Contact = require("../models/contact.model");

// Get all contact entries (if needed)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch contact entries", details: err.message });
  }
};

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res
      .status(201)
      .json({ message: "Contact message received", data: contact });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to create contact", details: err.message });
  }
};
