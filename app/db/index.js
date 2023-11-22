/*Set up Admin API for Firebase*/
const admin = require('firebase-admin');
//Define path to secret key generated for service account
const serviceAccount = require("../config/intrinsic.js");
const config = serviceAccount.cnfg;
//Initialize the app
admin.initializeApp({
  credential: admin.credential.cert(config)
});
const db = admin.firestore()

module.exports = db;