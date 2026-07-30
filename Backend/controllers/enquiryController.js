const express = require("express");
const cors = require("cors");
require("dotenv").config();
// SMTP Transport
const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  socketTimeout: 10000,
});
// Verify SMTP Connection
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP ERROR:", error);
  } else {
    console.log("SMTP READY");
  }
});

// Send Enquiry Controller
const sendEnquiry = async (req, res) => {
  try {
    console.log("📩 Request Received");
    console.log(req.body);

    const { name, phone, email, state, language, message } = req.body;

    // Validation
    if (!name || !phone || !email || !state || !language || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const mailOptions = {
       from: process.env.EMAIL_USER,     // Your Gmail
       to: process.env.MAIL_TO,              // Recipient's email address
      replyTo: email,
      subject: "📩 New AV DIGIPRO Enquiry",
      html: `
        <h2>New Projector Enquiry</h2>

        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td><b>Name</b></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><b>State</b></td>
            <td>${state}</td>
          </tr>

          <tr>
            <td><b>Language</b></td>
            <td>${language}</td>
          </tr>

          <tr>
            <td><b>Message</b></td>
            <td>${message}</td>
          </tr>
        </table>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Mail Sent Successfully");
    console.log(info.response);

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });

  } catch (error) {
    console.error("❌ Mail Error:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
      error: error.message,
    });
  }
};

module.exports = { sendEnquiry };