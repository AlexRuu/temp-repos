const sendEmail = require("./sendEmail");

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;

  const message = `<p>Please confirm email by clicking the following <a href="${verifyEmail}">link.</a> </p>`;

  return sendEmail({
    to: email,
    subject: "Verify Email",
    html: `<h4>ayo ${name}</h4> ${message}`,
  });
};

module.exports = sendVerificationEmail;
