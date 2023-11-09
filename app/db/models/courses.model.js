const db = require("../index")
const COLLECTIONS = require("../../constants/collections.enums")
const courseCollection = db.collection(COLLECTIONS.COURSES);

module.exports = {courseCollection};