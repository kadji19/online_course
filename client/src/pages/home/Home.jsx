import React from 'react'
import banner from '../../asset/banner1.png'
import './home.css'

const Home = () => {
  return (
    <div>
      <section className='banner'>
       <div className="banner_image">
       <img className='image_home' src={banner} alt="" />
       </div>
        <div className="banner_text">
            <div className="banner_text_title"></div>
            <div className="banner_text_text"></div>
            <div className="banner_text_btn"></div>
        </div>
      </section>
      <section></section>
    </div>
  )
}

export default Home