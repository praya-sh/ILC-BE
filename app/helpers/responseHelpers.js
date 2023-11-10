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
const badRequestResponse = async(res,{message=ReasonPhrases.BAD_REQUEST,data=null, error=null}) => {
    return res.send({
        status:ReasonPhrases.BAD_REQUEST,
        statusCode:StatusCodes.BAD_REQUEST,
        message,
        data,
        error
    })
}
const forbiddenResponse = async(res,{message=ReasonPhrases.FORBIDDEN,data=null, error=null}) => {
    return res.send({
        status:ReasonPhrases.FORBIDDEN,
        statusCode:StatusCodes.FORBIDDEN,
        message,
        data,
        error
    })
}

module.exports = {
    successResponse, errorResponse,
    createdResponse,
    badRequestResponse,
    forbiddenResponse,
}