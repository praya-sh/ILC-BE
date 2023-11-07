const {successResponse} = require('../../app/libs/responseHelpers')
const usersModel = require("../db/models/users.model")
const usersRepo = require("../db/repository/users.repository")
const listUsers = async(req,res,next)=>{
    const usersList = await usersRepo.getUsers()
    return successResponse(res,{message:'Users listed successfully',data:usersList})
}

const addUser = async(req,res,next)=>{
    const userData = {
        first: 'Prayash',
        last: 'Shakya',
        born: 2060
      }
    const data = await usersRepo.addNewUser(userData)
    return successResponse(res,{message:'User added successfully', data})
}

module.exports = {listUsers,addUser}