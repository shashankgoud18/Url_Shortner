import { getShortUrl } from "../dao/short_url.js"
import { createShortUrlWithoutUser } from "../services/short_url.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"


export const createShortUrl = wrapAsync(async (req, res,next) => {
        const {url} = req.body
        const shortUrl = await createShortUrlWithoutUser(url)
        res.send(process.env.APP_URL + shortUrl)
})

export const redirectFromShortUrl = wrapAsync(async (req, res,next) => {
    const {id} =  req.params
    const url = await getShortUrl(id)
    console.log(url)
    res.redirect(url.full_url)
})

