const {unitCollection} = require("../models/units.model")

const addNewUnit = async(unitDetails)=>{
    try{
        const newDoc = await unitCollection.add(unitDetails)
        return newDoc;
    }catch(error){
        console.log(error);
    }
}

const addContent = async(unitContent, docKey)=>{
    try{    
        const unitRef = await unitCollection.doc(docKey)
        
        const unitDoc = await unitRef.update({
           uContent: unitContent

          });
          return true
    }catch(error){
        console.log(error)
    }
}

const getUnit = async(docKey)=>{
    try{
        const unit = await unitCollection.doc(docKey).get()
        return unit.exists ? unit.data():null
    
    }catch(error){
        console.log(error)
    }
}


module.exports={addNewUnit, addContent, getUnit}