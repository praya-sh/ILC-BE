const {eCollection} = require("../models/elist.model")

const addElist = async(eData) =>{
        try{
            const docRef = eCollection.doc('e1')
            const newDoc = await docRef.set(eData);
        }catch(error){
            console.log(error);
        }
}


const getElist = async()=>{
    try{
    
        const elist = await eCollection.get()
        const elistArr = [];
        if(elist){
            elist.forEach((doc)=>{
                elistArr.push(doc.data());
            })
        }
        console.log(JSON.stringify(elistArr))
        return elistArr
    }catch(error){
        console.log(error);
    }
   
}

module.exports = {addElist, getElist}