const {courseCollection} = require("../models/courses.model")
const {unitCollection} = require("../models/units.model")


const addNewCourse = async(courseDetails)=>{
    try{
        const newDoc = await courseCollection.add(courseDetails)
        return newDoc;
    }catch(error){
        console.log(error);
    }
}

const getCourses = async()=>{
    try{
        const courses = await courseCollection.get();
        const coursesArray = [];
        if(courses)
        {
            courses.forEach((doc) => {
                coursesArray.push({
                    id: doc.id,
                    name: doc.data().name,
                    isLocked:doc.data().isLocked
                })
              });
        }
        console.log(JSON.stringify(coursesArray))
        return coursesArray;
    }
    catch(error){
        console.error('Error getting courses',error)
    }
}

const getCourseUnits = async(courseId)=>{
    try{
        const courseUnits = await unitCollection.where('course', '==', courseId).get()
        const courseUnitArray = [];
        if (courseUnits)
        {
            courseUnits.forEach((doc)=>{
                courseUnitArray.push({
                    id:doc.id,
                    unit:doc.data().unit,
                    course:doc.data().course,
                    // uContent:doc.data().uContent,
                    content:doc.data().content
                })
            });
        }
        
        console.log(JSON.stringify(courseUnitArray))
        return courseUnitArray
    }catch(error){
        console.log('Error getting course units',error)
    }
}

module.exports = {addNewCourse, getCourses, getCourseUnits}