import urlSchema from '../models/shorturl.model.js'
import { ConflictError } from '../utils/errorHandler.js';
export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try {
        const existingUrl = await urlSchema.findOne({short_url:shortUrl})
        if(existingUrl){
            console.log('Short URL already exists')
            throw new ConflictError("Short URL already exists")
        }

        const newUrl = new urlSchema({
            full_url: longUrl,
            short_url: shortUrl
        })
        if (userId) {
            newUrl.user = userId;
        }
        await newUrl.save()
        return newUrl
    } catch (err) {
        if (err.code == 11000) {
            console.log('Short URL already exists2')
            throw new ConflictError(err)
        }
        throw new Error(err)
    }

}

export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } })
}