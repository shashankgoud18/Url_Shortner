import { nanoid } from "nanoid"
export const generateNanoId = async(length)=>{
    const id = nanoid(length)
     console.log('Generated ID:', id)
    return id
}