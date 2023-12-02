const quizRepo = require("../db/repository/quizes.repository")
const { createdResponse, successResponse } = require("../helpers/responseHelpers")

const addQuiz = async(req, res, next) =>{
    try{
        const quizContent = {...req.body}
        await quizRepo.addNewQuiz(quizContent)
        return createdResponse(res, {message:'quiz created', data:quizContent})
    }catch(error){
        console.log(error)
    }
}

const listQuizes = async(req, res, next) =>{
    try{
        const {uId} = req.query
        const unitQuizObj = await quizRepo.getUnitQuizes(uId)
        
        successResponse(res, {message:"quizes retrieved", data:unitQuizObj})
    }catch{
        console.log(error)  
    }
}

module.exports = { addQuiz, listQuizes}
