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
        if(unit.exists){
            return {
                id:unit.id,
                unit:unit.data().unit,
                course:unit.data().course,
                uContent:unit.data().uContent
            }
        }
    
    }catch(error){
        console.log(error)
    }
}

const getUnitName = async(Id) => {
    try{
        const unit = await unitCollection.doc(Id).get()
        if(!unit){throw new Error("No Unit Found")}
        const unitName = unit.data();
        return unitName.unit;
    }catch(error){console.error(error)} 
}


module.exports={addNewUnit, addContent, getUnit, getUnitName}