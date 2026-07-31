require("dotenv").config();

const express = require("express");
const cors = require("cors");

const transporter = require("./utils/mailer");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/enquiry", enquiryRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AV DIGIPRO Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});