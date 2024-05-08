import React, { useEffect } from 'react'
import banner from '../../asset/banner1.png'
import illustration1 from '../../asset/illustration1.png'
import illustration2 from '../../asset/illustration2.png'
import illustration3 from '../../asset/illustration3.png'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
const Home = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
  return (
    <div>
      <section className='banner'>
       <div className="banner_image">
       <img className='image_home' src={banner} alt="" />
       </div>
        <div className="banner_text" data-aos="zoom-in">
            <div className="banner_text_title">
                <div className="title_icon"><box-icon name='zap' type='solid' color='#373737' ></box-icon></div>
                <strong><span className='title_blue'>Libérez</span> votre potentiel créatif</strong>
            </div>
            <div className="banner_text_text">
                <span className='text_para'>Avec nos cours de conception et de développement en ligne</span>
                <p>apprenez des experts du secteur et améliorez vos compétences</p>
            </div>
            <button className="banner_text_btn"><Link className='banner_btn' to='/login' >Explorez les cours</Link></button>
        </div>
      </section>
      <section className='home_text'>
        <strong className='home_text_title'>Savoir-faire</strong>
        <p>Avec <span className='title_blue'>O-Course</span>, découvrez une nouvelle façon d'apprendre : 20% de théorie, 80% de pratique.</p>
      </section>
      <section className="home_illustration" data-aos="zoom-in-up">
        <div class="card">
            <div class="card_image">
                <img src={illustration1} alt="" />
            </div>
            <div class="title">
                <h3>Apprenez où que vous soyez</h3>
            </div>
            <div class="des">
                <p>Accédez à votre formation 100% en ligne au bureau, à la maison, en ville, à la montagne... Partout !</p>
            </div>
        </div>
        <div class="card">
            <div class="card_image">
                <img src={illustration1} alt="" />
            </div>
            <div class="title">
                <h3>Un mentor pour vous accompagner</h3>
            </div>
            <div class="des">
                <p>Accédez à votre formation 100% en ligne au bureau, à la maison, en ville, à la montagne... Partout !</p>
            </div>
        </div>
        <div class="card">
            <div class="card_image">
                <img src={illustration1} alt="" />
            </div>
            <div class="title">
                <h3>Travaillez surdes projets</h3>
            </div>
            <div class="des">
                <p>Accédez à votre formation 100% en ligne au bureau, à la maison, en ville, à la montagne... Partout !</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home