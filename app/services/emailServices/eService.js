// const {successResponse} = require('../../libs/responseHelpers')
const sendmail = (req, res, next)=>{
    // console.log("this also works")
    return 'sending email';
    // return successResponse(res, {message:"email"})
}

module.exports= {sendmail};