import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'

const NavBar = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate({ to: '/auth' })
  }

  const handleHomeClick = () => {
    navigate({ to: '/' })
  }

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - App name */}
          <div className="flex-shrink-0">
            <h1 
              onClick={handleHomeClick}
              className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
            >
              URL Shortener
            </h1>
          </div>

          {/* Right side - Login button */}
          <div className="flex items-center">
            <button 
              onClick={handleLoginClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
    