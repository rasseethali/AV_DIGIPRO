const nodemailer = require("nodemailer");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

// SMTP Transport
const transporter = nodemailer.createTransport({
  service: "gmail",
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


    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.MAIL_TO,
      replyTo: email,

      subject: "📩 New AV DIGIPRO Enquiry",

      html: `
        <div>
          <h2>New Projector Enquiry</h2>

          <table 
            border="1" 
            cellpadding="10" 
            cellspacing="0"
            style="border-collapse:collapse;"
          >

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
        </div>
      `,
    };


    await transporter.sendMail(mailOptions);


    console.log("✅ Mail Sent Successfully");


    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });


  } catch (error) {

    console.log("❌ Mail Error:", error.message);


    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
      error: error.message,
    });

  }
};


module.exports = { sendEnquiry };