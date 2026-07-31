const transporter = require("../utils/mailer");

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


    // Owner Mail
    const ownerMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: "📩 New AV DIGIPRO Enquiry",

      html: `
        <h2>New Enquiry Received</h2>

        <table border="1" cellpadding="10" cellspacing="0">
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


    console.log("➡️ Sending Owner Mail...");

    await transporter.sendMail(ownerMail);

    console.log("✅ Owner Mail Sent");


    return res.status(200).json({
      success: true,
      message: "Enquiry mail sent successfully.",
    });


  } catch (error) {

    console.log("❌ Mail Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  sendEnquiry,
};