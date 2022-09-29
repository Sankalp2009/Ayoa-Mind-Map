import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Products from './Products'
const AllRoutes = () => {
  return (
    <>
    <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/product" element = {<Products />} />
    </Routes>
   </>
  )
}
export default AllRoutes