import mongoose from 'mongoose'


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Database Connected Successfully')
    }catch(err){
        console.log('Something went Wrong while connecting to DB')
        console.log(err)
    }
}

export default connectDB