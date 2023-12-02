const { messaging } = require("firebase-admin")
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

const checkQuizAns = async(req, res, next) =>{
    try{
        const givenAns = {...req.body} //need to send quizId and ans as json
        //console.log(givenAns)
        const quizAns = await quizRepo.getQuizAns(givenAns.quizId)
        if (givenAns.ans == quizAns){
            return successResponse(res, {message:"correct answer", data:quizAns})
        }
        else if(givenAns.ans != quizAns){
            return successResponse(res, {message:"wrong answer", data:givenAns})
        }
    }catch(error){

    }
}

module.exports = { addQuiz, listQuizes, checkQuizAns}
