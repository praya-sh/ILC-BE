const {quizCollection} = require("../models/quizes.model")
const {courseCollection} = require("../models/courses.model")
const {unitCollection} = require("../models/units.model")

const addNewQuiz = async(quizDetails) =>{
    try{
        const newDoc = await quizCollection.add(quizDetails)
        return newDoc
    }catch(error){
        console.log(error)
    }
}

module.exports = {addNewQuiz}