const nodemailer = require('nodemailer');

// const {successResponse} = require('../../libs/responseHelpers')

const sendmail = async(toEmailArray, subject, text)=>{
    const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: 'intrinsiclearn6@gmail.com',
    pass: 'wqjj nmbr taeu qsiq'
  }
})

const mailOptions = {
    from: 'intrinsiclearn6@gmail.com',
    to: toEmailArray,
    subject: subject,
    text
  };


return transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("\n send email error\n",error);
      return false
    } else {
      console.log('Email sent: ' + info.response);
      return true
    }
}

);}


module.exports= {sendmail};