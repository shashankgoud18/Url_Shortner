import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const AuthPage = () => {
    const [Login,setLogin] = useState(true)

  return (
    <div className="max-h-screen mx-auto p-8 item-center">
        {Login ? <LoginForm state={setLogin}/> : <RegisterForm state={setLogin}/>}
    </div>
  )
}

export default AuthPage