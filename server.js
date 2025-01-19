const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const questionRoutes = require("./routes/question.route");
const contactRoutes = require("./routes/contact.route");
const reportRoutes = require("./routes/report.route");
const mongoose = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

app.use("/api/questions", questionRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/reports", reportRoutes);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
