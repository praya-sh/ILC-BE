const {userCollection} = require("../models/users.model")
//data access layer access each entity sets
const addNewUser = async(userData)=>{
    try{
            const docRef = userCollection.doc(userData.uid);
            const newDoc = await docRef.set(userData);
    return newDoc;
        }
        catch(error){
            console.error('Error creating user',error) 
            throw new Error('Error creating user')
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
const findUser = async(docKey)=>{
    
    try{
        
        const user = await userCollection.doc(docKey).get()

        return user.exists ? user.data():null
    }catch(error){
        console.log(`Error finding ${docKey} user`, error)
        throw new Error(`Error finding ${docKey} user`);
    }
}

module.exports={addNewUser,getUsers, findUser}