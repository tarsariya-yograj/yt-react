import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../Pages/Login'
import Singup from '../Pages/Singup'
import Product from '../Pages/Product'
import Error from '../Pages/Error'
import Home from '../Pages/Home'

const Allrount = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login"element={<Login />} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/Signup" element={<Singup />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default Allrount