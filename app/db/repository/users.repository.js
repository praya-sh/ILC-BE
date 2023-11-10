const {userCollection} = require("../models/users.model")
const db = require("../index")
const  { firestore } = require ('firebase-admin')

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

const addExptoUser = async(docKey, expPoint)=>{
    try{
        const userRef = await userCollection.doc(docKey)
        console.log(docKey, expPoint)
        const userXp = await userRef.update({
           expPoints: firestore.FieldValue.increment(expPoint)

          });
        console.log(userXp);

        return true

    }catch(error){
        console.log(error);
    }
}

const getUserExp = async(docKey)=>{
    try{
        const userExp = await userCollection.doc(docKey).get();
        userObj = userExp.data()
        console.log(userObj)
        //return userExp.expPoints
    }catch(error){
        console.log(error)
    }
}
const calculateUserLevel = async(docKey, expPoint)=>{
    try{
        const userRef = await userCollection.doc(docKey)
        const level = expPoint/10
        const userLevel = await userRef.update({
            userLevel: level
        })
        return level
    }catch(error){
        console.log(error)
    }
}

module.exports={addNewUser,getUsers, findUser, addExptoUser, getUserExp, calculateUserLevel}