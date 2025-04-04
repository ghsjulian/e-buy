import React from 'react'
import {useApp} from "../contexts/AppContext"
import {Navigate, Outlet} from "react-router-dom"

const LoginProtector = ({children}) => {
  const {isLogin} = useApp()
  return (
    <>
    {
        !isLogin? children : <Navigate to="/"/>
    }
    </>
  )
}

export default LoginProtector