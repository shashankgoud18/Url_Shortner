import React, { useState } from 'react'
import axios from 'axios'
import { createShortUrl } from '../api/shortUrl.api'

const UrlForm = () => {

    const [url, setUrl] = useState("https://www.google.com")
    const [shortUrl, setShortUrl] = useState(null)
    const [error, setError] = useState(null)
    const [copied, setCopied] = useState(false)


    const handleSubmit = async () => {
        const shortUrl = await createShortUrl(url)
        setShortUrl(shortUrl)
         setError(null)
    }


    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault()
                handleSubmit()
            }
            } className="mb-8 ">
                <div className="flex flex-col justify-center items-center sm:flex-row gap-3 mb-4">
                    <input
                        type="url"
                        placeholder="Enter your long URL here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium text-base hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        Short Url
                    </button>
                </div>
            </form>

            {error && (
                <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200">
                    {error}
                </div>
            )}


            {shortUrl && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl border">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Your shortened URL:</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            value={shortUrl}
                            readOnly
                            className="flex-1 px-4 py-3 border-2 border-green-500 rounded-lg text-base bg-white"
                        />
                        <button
                            onClick={copyToClipboard}
                            className={`px-4 py-3 text-white rounded-lg font-medium transition-colors ${copied
                                    ? 'bg-green-700'
                                    : 'bg-green-600 hover:bg-green-700'
                                }`}
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
            )}
        </>

    )

}

export default UrlForm