import express from 'express'
import connectDB from './config/db.config.js'
import dotenv from 'dotenv'
dotenv.config('./.env')
import urlSchema from './models/shorturl.model.js'
import short_url from './routes/short_url.route.js'
import { redirectFromShortUrl } from './controllers/short_url.controller.js'
import { errorHandler } from './utils/errorHandler.js'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/create',short_url)
app.get('/:id',redirectFromShortUrl)

app.use(errorHandler)


app.listen(process.env.PORT || 3000,()=>{
    connectDB()
    console.log(`Server is listening ${process.env.PORT}`)
})