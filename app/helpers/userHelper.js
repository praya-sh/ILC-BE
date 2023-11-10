/**
 * returns parsedUser object
 * @param {*} userData 
 * @returns 
 */
const parseUserObject =async(userData)=>{
    return {
        uid: userData?.uid,
        email:userData?.email,
        displayName: userData?.displayName,
        photoURL : userData?.photoURL,
        
        // phoneNumber: userData?.phoneNumber,
    }
}



module.exports={
    parseUserObject
}