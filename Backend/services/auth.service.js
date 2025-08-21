import { findUserByEmail, createUser } from "../dao/user.dao.js"
import { ConflictError } from "../utils/errorHandler.js"
import jwt from 'jsonwebtoken'
import { signToken } from "../utils/helper.js"


export const registerUser = async(name,email,password)=>{
    //register user
    const user = await findUserByEmail(email)
    console.log(user,'USer Registered')
    if(user){
        throw new ConflictError("User already exists")
    }
    const newUser = await createUser(name,email,password)
    const token = signToken({id:newUser._id})
    return token
}

export const loginUser = async(email,password)=>{
    const user = await findUserByEmail(email)
    console.log(user,'user logged in')
    if(!user || user.password !== password){
        throw new Error("Invalid credentials")
    }
    
    const token = signToken({id:user._id})
    return {token,user}
}