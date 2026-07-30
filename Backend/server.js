require("dotenv").config();

const express = require("express");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://avdigi.co.in",
      "https://www.avdigi.co.in",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/enquiry", enquiryRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AV DIGIPRO Backend Running...",
  });
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});