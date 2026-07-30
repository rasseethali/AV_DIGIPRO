const nodemailer = require("nodemailer");
require("dns").setDefaultResultOrder("ipv4first");

// SMTP Transport
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP Connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP ERROR:", error);
  } else {
    console.log("✅ SMTP READY");
  }
});

// Send Enquiry Controller
const sendEnquiry = async (req, res) => {
  try {
    console.log("📩 Request Received:", req.body);

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

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("MAIL_TO:", process.env.MAIL_TO);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.MAIL_TO, // Receiver
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

    console.log("📧 Mail Options:", mailOptions);

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Mail Sent Successfully");
    console.log("Message ID:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });

  } catch (error) {
    console.error("❌ Full Error:", error);
    console.error("Error Code:", error.code);
    console.error("Message:", error.message);
    console.error("Response:", error.response);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { sendEnquiry };