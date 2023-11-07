const { successResponse } = require("../libs/responseHelpers");
const emailService = require("../services/emailServices/eService")


const sendEmail = (req, res, next) =>{
    console.log("this works")

    const sendMailResponse = emailService.sendmail(req, res,next);
    return successResponse(res, {message:sendMailResponse})
}

module.exports = {sendEmail};