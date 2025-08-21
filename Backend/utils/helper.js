import { nanoid } from "nanoid"
import jwt from 'jsonwebtoken'
import { cookieOptions } from "../config/config.js"
export const generateNanoId = async(length)=>{
    const id = nanoid(length)
     console.log('Generated ID:', id)
    return id
}

export const signToken = (payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1d'})
}

export const verifyToken = (token)=>{
    return jwt.verify(token,process.env.JWT_SECRET)
}