import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.BREVO_HOST,
    port: process.env.BREVO_PORT,
    secure: false,
    auth: {
      user: process.env.BREVO_EMAIL,
      pass: process.env.BREVO_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Support" <${process.env.BREVO_EMAIL}>`,
    to,
    subject,
    html,
  });
};

export default sendEmail;
