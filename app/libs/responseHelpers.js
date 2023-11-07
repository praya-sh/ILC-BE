const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const successResponse = async(res,{message='Success',data=null}) => {
    return res.send({
        status:ReasonPhrases.OK,
        statusCode:StatusCodes.OK,
        message,
        data
    })
}

module.exports = {
    successResponse
}