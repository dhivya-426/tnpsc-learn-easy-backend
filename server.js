require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const questionRoutes = require("./routes/question.route");
const contactRoutes = require("./routes/contact.route");
const reportRoutes = require("./routes/report.route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected Successfully! 🚀"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/api/questions", questionRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/reports", reportRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
