const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailNodeMailer = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "domenica.halvorson@ethereal.email",
      pass: "5qTSkpgYz72QGaDCef",
    },
  });

  let info = await transporter.sendMail({
    from: '"Alex" <aiyah14135@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Wussup</h2>",
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "aiyah14135@gmail.com", // Change to your recipient
    from: "itsweiru@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
