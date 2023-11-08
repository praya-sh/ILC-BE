const db = require("../index")
const COLLECTIONS = require("../../constants/collections.enums")
const eCollection = db.collection(COLLECTIONS.ELIST)
module.exports ={eCollection};
