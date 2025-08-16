import { saveShortUrl } from "../dao/short_url.js"
import { generateNanoId } from "../utils/helper.js"

export const createShortUrlWithoutUser = async (url) => {
    try{
        const shortUrl = await generateNanoId(7)
        const saved = await saveShortUrl(shortUrl, url)
        return saved.short_url
    }catch(err){
        console.log(err)
    }
    
}

export const createShortUrlWithUser = async (url, userId) => {
    const shortUrl = await generateNanoId(7)
    await saveShortUrl(shortUrl, url, userId)
    return shortUrl
}