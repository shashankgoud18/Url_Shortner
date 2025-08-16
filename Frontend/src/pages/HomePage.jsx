import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <>
    <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">URL Shortener</h1>
       <UrlForm/>
    </div>
    </>
  )
}

export default HomePage