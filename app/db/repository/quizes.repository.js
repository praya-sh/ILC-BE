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

module.exports = {addNewQuiz, getUnitQuizes}