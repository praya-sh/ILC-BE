const db = require("../index")
const COLLECTIONS = require("../../constants/collections.enums")
const userCollection = db.collection(COLLECTIONS.USERS)

module.exports={userCollection}

//schema definitiona nd validation