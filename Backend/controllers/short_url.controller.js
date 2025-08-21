import { getShortUrl } from "../dao/short_url.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"


export const createShortUrl = wrapAsync(async (req, res, next) => {
    const data = req.body
    console.log(data,'data')
    let shortUrl
    if(req.user){
        shortUrl = await createShortUrlWithUser(data.url,req.user._id,data.slug)
    }else{
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
         
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })
})


export const redirectFromShortUrl = wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const url = await getShortUrl(id)
    console.log(url)
    res.redirect(url.full_url)
})

