import { findUserById } from "../dao/user.dao.js"
import { verifyToken } from "./helper.js"

export const attachUser = async(req,res,next)=>{
     console.log(req.cookies.accessToken,'cookies')
     const token = req.cookies.accessToken
     console.log(token,'this one')
     if(!token || typeof token !== "string" || token === "undefined"){
        return next()
     }
     try{
        const decoded = verifyToken(token)
        console.log(decoded,'token')
        const user = await findUserById(decoded.id)
        console.log(user,'user')
        if(!user){
            return next()
        }
        req.user = user
        next()
     }catch(err){
         next()
     }
}