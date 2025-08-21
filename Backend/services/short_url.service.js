import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js"
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

export const createShortUrlWithUser = async (url, userId,slug=null) => {
    const shortUrl = slug || generateNanoId(7)
    
    const exist = await getCustomShortUrl(slug)
    if(exist) throw new Error("This Custom url already exists")
    await saveShortUrl(shortUrl, url, userId)
    return shortUrl
}