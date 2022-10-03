import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Products from './Products'
import SignUp from './SignUp'

const AllRoutes = () => 
{
  return (
    <>
    <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/signAuth" element = {<SignUp/>} />
            <Route path = "/product" element = {<Products />} />
    </Routes>
   </>
  )
}
export default AllRoutes