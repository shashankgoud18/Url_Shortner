import mongoose from "mongoose";
import { nanoid } from "nanoid";

const shortUrlSchema = new mongoose.Schema({
    full_url:{
        type:String,
        required:true
    },
    short_url:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    clicks:{
        type:Number,
        default:0   
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const shortUrl = mongoose.model("shortUrl",shortUrlSchema);
export default shortUrl;