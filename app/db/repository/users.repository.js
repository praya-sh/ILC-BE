const { userCollection } = require("../models/users.model");
const db = require("../index");
const { firestore } = require("firebase-admin");

//data access layer access each entity sets
const addNewUser = async (userData) => {
  try {
    const docRef = userCollection.doc(userData.uid);
    const newDoc = await docRef.set(userData);
    return newDoc;
  } catch (error) {
    console.error("Error creating user", error);
    throw new Error("Error creating user");
  }
};

const getUsers = async () => {
  try {
    const users = await userCollection.get();
    const usersArray = [];
    if (users) {
      users.forEach((doc) => {
        usersArray.push(doc.data());
      });
    }
    console.log(JSON.stringify(usersArray));
    return usersArray;
  } catch (error) {
    console.error("Error getting users", error);
  }
};
const findUser = async (docKey) => {
  try {
    const user = await userCollection.doc(docKey).get();
    return user.exists ? user.data() : null;
  } catch (error) {
    console.log(`Error finding ${docKey} user`, error);
    throw new Error(`Error finding ${docKey} user`);
  }
};

const addExptoUser = async (docKey, expPoint) => {
  try {
    const userRef = await userCollection.doc(docKey);
    console.log(docKey, expPoint);
    const userXp = await userRef.update({
      expPoints: firestore.FieldValue.increment(expPoint),
    });
    console.log(userXp);

    return true;
  } catch (error) {
    console.log(error);
  }
};

const completeUnit = async (userId, unitId) => {
  try {
    userRef = await userCollection.doc(userId);
    await userRef.update({
      unitsCompleted: firestore.FieldValue.arrayUnion(unitId),
    });
    return true;
  } catch (error) {
    console.log(error);
  }
};

const completeQuiz = async (userId) => {
  try {
    userRef = await userCollection.doc(userId);
    await userRef.update({
      // quizesCompleted: firestore.FieldValue.arrayUnion(quizId),
      quizesCompletedNo: firestore.FieldValue.increment(1),
    });
    return true;
  } catch (error) {
    console.log(error);
  }
};

const completeAchievement = async (userId, achievementId) => {
  try {
    userRef = await userCollection.doc(userId);
    await userRef.update({
      achievements: firestore.FieldValue.arrayUnion(achievementId),
    });
  } catch (error) {
    console.log(error);
  }
};

const seeUserAchievement = async (userId) => {
  try {
    userRef = await userCollection.doc(userId).get();
    // const achievementArray = []
    // achievementArray.push({
    //     achievementId:userRef.data().achievements
    // })
    // achievementArray =  []
    // achievementArray.push({
    //     achievementId:userRef.achievements?userRef.achievements : null
    // })
    
    
    return userRef.data().achievements;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addNewUser,
  getUsers,
  findUser,
  addExptoUser,
  completeUnit,
  completeQuiz,
  completeAchievement,
  seeUserAchievement,
};
