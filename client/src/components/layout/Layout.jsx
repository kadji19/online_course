import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import AboutUs from '../../pages/about-us/AboutUs'
import Contact from '../../pages/contact/Contact'
import './layout.css'
import Register from '../../pages/register/Register'
import Login from '../../pages/login/Login'

const Layout = () => {
  return (
    <div >
        <Header/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout