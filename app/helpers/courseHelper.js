const parseCourseUnit =async(data)=>{
    return {
        course: data.course,
        courseUnitsArray: data.courseUnitsArray
    }
}



module.exports={
    parseCourseUnit
}