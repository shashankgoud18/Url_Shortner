import express from 'express'
import connectDB from './config/db.config.js'
import dotenv from 'dotenv'
dotenv.config('./.env')
import urlSchema from './models/shorturl.model.js'
import short_url from './routes/short_url.route.js'
import auth_routes from './routes/auth.routes.js'
import { redirectFromShortUrl } from './controllers/short_url.controller.js'
import { errorHandler } from './utils/errorHandler.js'
import cors from 'cors'
import { attachUser } from './utils/attachUser.js'
import cookieParser from 'cookie-parser'


const app = express()
app.use(cors(
    {
        origin:'http://localhost:5174',
        credentials:true
    }
))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)
app.use('/auth',auth_routes)
app.use('/api/create',short_url)
app.get('/:id',redirectFromShortUrl)

app.use(errorHandler)


app.listen(process.env.PORT || 3000,()=>{
    connectDB()
    console.log(`Server is listening ${process.env.PORT}`)
})