import { findUserById } from "../dao/user.dao"
import { verifyToken } from "../utils/helper"

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.acccessToken
    if(!token){
        return res.status(401).json({message:"No token found"})
    }
    try {
        const decoded = verifyToken(token)
        const user = await findUserById(decoded.id)
        if(!user){
            return res.status(401).json({message:"No user found"})
        }
        req.user = user
        next()
    }catch(err){
        return res.status(401).json({message:"Invalid token"})
    }
}