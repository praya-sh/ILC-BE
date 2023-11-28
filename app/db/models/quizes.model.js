const db = require("../index")
const COLLECTIONS = require("../../constants/collections.enums")
const quizCollection = db.collection(COLLECTIONS.QUIZES);

module.exports = {quizCollection};