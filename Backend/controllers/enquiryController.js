const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "developer4@arkcodux.com",
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP ERROR");
    console.log(error);
  } else {
    console.log("SMTP Connected Successfully");
  }
});


    const sendEnquiry = async (req, res) => {
  console.log("Request Received");
  console.log(req.body);
  try {
    const { name, phone, email, state, language, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "📩 New AV DIGIPRO Enquiry",
      html: `
        <h2>New Projector Enquiry</h2>
        <table border="1" cellpadding="10" cellspacing="0">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>State</b></td><td>${state}</td></tr>
          <tr><td><b>Language</b></td><td>${language}</td></tr>
          <tr><td><b>Message</b></td><td>${message}</td></tr>
        </table>
      `,
    };

   const info = await transporter.sendMail(mailOptions);

console.log("Mail Sent Successfully");
console.log(info);

res.status(200).json({
  success: true,
  message: "Enquiry sent successfully",
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry",
    });
  }
};

module.exports = { sendEnquiry };