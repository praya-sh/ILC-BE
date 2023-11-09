const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const successResponse = async(res,{message='Success',data=null, error= null}) => {
    return res.send({
        status:ReasonPhrases.OK,
        statusCode:StatusCodes.OK,
        message,
        data,
        error
    })
}
const createdResponse = async(res,{message='Entity created',data=null, error= null}) => {
    return res.send({
        status:ReasonPhrases.CREATED,
        statusCode:StatusCodes.CREATED,
        message,
        data,
        error
    })
}

const errorResponse = async(res,{message='Something went wrong',data=null, error=null}) => {
    return res.send({
        status:ReasonPhrases.INTERNAL_SERVER_ERROR,
        statusCode:StatusCodes.INTERNAL_SERVER_ERROR,
        message,
        data,
        error
    })
}

module.exports = {
    successResponse, errorResponse,
    createdResponse,
}