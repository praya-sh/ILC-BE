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

const getUnitQuizes = async(unitId) =>{
    try{
        const unitQuizes = await quizCollection.where('unit', '==', unitId).get()
        const unitQuizesArray = [];

        if(unitQuizes){
            unitQuizes.forEach((doc)=>{
                unitQuizesArray.push(doc.data())
            });

        }
        
        return unitQuizesArray

    }catch(error){
        console.log(error)
    }
}

const getQuizAns = async(quizId) =>{
    try{
         const quiz = await quizCollection.doc(quizId).get()
         //console.log(quiz.data())
         //const quizAns = quiz.data().ans
         //console.log(quizAns)
         return quizAns
    }catch{
        console.log(error)
    }
}

module.exports = {addNewQuiz, getUnitQuizes, getQuizAns}