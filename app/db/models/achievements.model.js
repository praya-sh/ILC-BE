const db = require("../index")
const COLLECTIONS = require("../../constants/collections.enums")
const achievementCollection = db.collection(COLLECTIONS.ACHIEVEMENTS)

module.exports = {achievementCollection}