const {successResponse} = require('../../app/libs/responseHelpers')
const userTest = async(req,res,next)=>{
    return successResponse(res,{message:'userTest'})
}

module.exports = {userTest}