const {courseCollection} = require("../models/courses.model")


const addNewCourse = async(courseDetails)=>{
    try{
        const newDoc = await courseCollection.add(courseDetails)
        return newDoc;
    }catch(error){
        console.log(error);
    }
}

module.exports = {addNewCourse}