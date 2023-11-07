const {userCollection} = require("../models/users.model")

const addNewUser = async(userData)=>{
    try{
            const docRef = userCollection.doc('prayash');
            const newDoc = await docRef.set(userData);
    return newDoc;
        }
        catch(error){
            console.error('Error creating user',error) 
        }
}

const getUsers = async()=>{
    try{
        const users = await userCollection.get();
        const usersArray = [];
        if(users)
        {
            users.forEach((doc) => {
                usersArray.push(doc.data())
              });
        }
        console.log(JSON.stringify(usersArray))
        return usersArray;
    }
    catch(error){
        console.error('Error getting users',error)
    }

}

module.exports={addNewUser,getUsers}