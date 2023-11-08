const nodemailer = require('nodemailer');

// const {successResponse} = require('../../libs/responseHelpers')

const sendmail = ()=>{
    const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: 'intrinsiclearn6@gmail.com',
    pass: 'wqjj nmbr taeu qsiq'
  }
})

const mailOptions = {
    from: 'intrinsiclearn6@gmail.com',
    to: 'prayashshakya20@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});}


module.exports= {sendmail};