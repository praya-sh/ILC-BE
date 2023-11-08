const { successResponse } = require("../libs/responseHelpers");
const emailService = require("../services/emailServices/eService")
const elistRepo = require("../db/repository/elist.repository")


const sendEmail = async(req, res, next) =>{
    console.log("this works");



    const toEmailArray = req.body.emailIdArray;
    const subject = req.body.subject;
    const text = req.body.text;
    if(!text || !subject)
        return null;

    const sendMailResponse = await emailService.sendmail(toEmailArray, subject, text);
    return successResponse(res, {message:sendMailResponse})
}

const listEcollection = async(req, res, next)=>{
    const el = await elistRepo.getElist();
    return successResponse(res, {message:'retrieved', data:el})
}

const pushEcollection = async(req, res, next)=>{
    const eData = {
        message : 'hello email'
        
    }
    const data = await elistRepo.addElist(eData);
    return successResponse(res, {message:'pushed to collection'})


}

module.exports = {sendEmail, listEcollection, pushEcollection};