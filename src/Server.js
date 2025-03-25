// server.js (Node.js)
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Жишээ нь: gmail, outlook
    auth: {
      user: 'gapu8ez@gmail.com', // Таны мэйл хаяг
      pass: 'Mundag300*', // Таны мэйл нууц үг эсвэл app password
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'your_email@gmail.com', // Мэйл хүлээн авах хаяг
    subject: 'Contact Us Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});