const db = require("../index")
const COLLECTIONS = require("../../constants/collections.enums")
const unitCollection = db.collection(COLLECTIONS.UNITS);

module.exports = {unitCollection};