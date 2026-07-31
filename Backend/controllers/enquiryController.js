const nodemailer = require("nodemailer");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

// SMTP Transport
const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
port: 587,
secure: false,
requireTLS: true,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP Connection
transporter.verify((error) => {
  if (error) {
    console.log("❌ SMTP ERROR:", error.message);
  } else {
    console.log("✅ SMTP READY");
  }
});


// Send Enquiry Controller
const sendEnquiry = async (req, res) => {
  try {
    console.log("📩 Request Received");
    console.log(req.body);

    const {
      name,
      phone,
      email,
      state,
      language,
      message,
    } = req.body;

  
    // Validation
    if (!name || !phone || !email || !state || !language || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // ===========================
    // 1. OWNER MAIL
    // ===========================
    const ownerMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Owner Gmail
      replyTo: email,
      subject: "📩 New AV DIGIPRO Enquiry",

      html: `
      <h2>New Enquiry Received</h2>

      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>State</b></td><td>${state}</td></tr>
        <tr><td><b>Language</b></td><td>${language}</td></tr>
        <tr><td><b>Message</b></td><td>${message}</td></tr>
      </table>
      `,
    };

    // ===========================
    // 2. USER CONFIRMATION MAIL
    // ===========================
    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting AV DIGIPRO",

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;">

        <h2 style="color:#0d6efd;">
          Thank You for Your Enquiry
        </h2>

        <p>Dear <strong>${name}</strong>,</p>

        <p>
          Thank you for contacting <strong>AV DIGIPRO</strong>.
        </p>

        <p>
          We have received your enquiry successfully.
          Our team will contact you shortly.
        </p>

        <hr>

        <h3>Your Submitted Details</h3>

        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;width:100%;">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>State</b></td><td>${state}</td></tr>
          <tr><td><b>Language</b></td><td>${language}</td></tr>
          <tr><td><b>Message</b></td><td>${message}</td></tr>
        </table>

        <br>

        <p>Regards,</p>
        <h3>AV DIGIPRO Team</h3>

      </div>
      `,
    };

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    // Send Both Mails
    await transporter.sendMail(ownerMail);
    await transporter.sendMail(userMail);

    console.log("✅ Owner Mail Sent");
    console.log("✅ User Confirmation Mail Sent");

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });

  } catch (error) {

    console.log("❌ Mail Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
      error: error.message,
    });

  }
};

module.exports = { sendEnquiry };