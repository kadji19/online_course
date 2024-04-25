import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import AboutUs from '../../pages/about-us/AboutUs'
import Contact from '../../pages/contact/Contact'
import './layout.css'
import Register from '../../pages/register/Register'
import Login from '../../pages/login/Login'
import Admin from '../../pages/admin/Admin'
import AddCourse from '../../pages/add-course/AddCourse'
import Category from '../../pages/category/Category'
import Course from '../../pages/course/Course'

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

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
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/category" element={<Category selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory} setCategoryId={setCategoryId} />} />
            <Route path="/course" element={<Course selectedCategory={selectedCategory}  categoryId={categoryId} />} />
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout