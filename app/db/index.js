/*Set up Admin API for Firebase*/
const admin = require('firebase-admin');
//Define path to secret key generated for service account
const serviceAccount = require("../config/intrinsic.json");
//Initialize the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()

module.exports = db;