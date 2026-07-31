const express = require("express");
const router = express.Router();

const { sendEnquiry } = require("../controllers/enquiryController");

// POST /api/enquiry
router.post("/", sendEnquiry);

module.exports = router;