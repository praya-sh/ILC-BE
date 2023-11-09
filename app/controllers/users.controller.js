const {successResponse, errorResponse, createdResponse} = require('../helpers/responseHelpers')
const usersModel = require("../db/models/users.model")
const usersRepo = require("../db/repository/users.repository")
const { parseUserObject } = require('../helpers/userHelper')
const listUsers = async(req,res,next)=>{
    const usersList = await usersRepo.getUsers()
    return successResponse(res,{message:'Users listed successfully',data:usersList})
}

const saveUser = async(req,res,next)=>{
    try{
    
    const userData = {...req.body}
    const parsedUser = await parseUserObject(userData)
    if(!userData.uid)
            throw new Error(`Invalid uid ${userData.uid} `);
    const userExists = await usersRepo.findUser(userData.uid)   
    console.log(userExists)
    if(userExists){
        
        return successResponse(res, {message:"User already exists", data:parsedUser})
    }else{
         await usersRepo.addNewUser(parsedUser)
        return createdResponse(res, {messaage:`${parsedUser.email} saved`, data:parsedUser})
    }
    }catch(error){
        return errorResponse(res, {message:error?.message, error})
    }
}

module.exports = {listUsers,saveUser}