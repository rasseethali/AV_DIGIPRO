require("dotenv").config();

const express = require("express");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/enquiry", enquiryRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("AV DIGIPRO Backend Running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});