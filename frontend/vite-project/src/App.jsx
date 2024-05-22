import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Main from './layout/Main/Main'
import Basket from './pages/BasketPage/Basket'
import Home from './pages/HomePage/Home'
import Admin from './pages/AddPage/Admin'
import Wishlist from './pages/WishPage/Wishlist'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Main/>} >
    <Route path='/Home' element={<Home/>} ></Route>
    <Route path='/Basket' element={<Basket/>} ></Route>
    <Route path='/admin' element={<Admin/>} ></Route>
    <Route path='/wishlist' element={<Wishlist/>} ></Route>
    </Route>

    </Routes>
     
    </>
  )
}

export default App
