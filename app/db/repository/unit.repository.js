const {unitCollection} = require("../models/units.model")

const addNewUnit = async(unitDetails)=>{
    try{
        const newDoc = await unitCollection.add(unitDetails)
        return newDoc;
    }catch(error){
        console.log(error);
    }
}

module.exports={addNewUnit}