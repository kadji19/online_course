import React, { useState } from 'react';
import './admin.css';
import image1 from '../../asset/image1.png';
import image2 from '../../asset/image2.png';
import image3 from '../../asset/image3.png';
import logo from '../../asset/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {

      const [pseudo, setPseudo] = useState("")
      const [password, setPassword] = useState("")
      const navigate = useNavigate()


      const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
          pseudo: pseudo, 
          password: password 
        };
      
        axios.post("http://localhost:5000/admin/login", data)
          .then((response) => {
            const accessToken = response.data.accessToken;

            localStorage.setItem("token", accessToken);

            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            navigate("/add-course");
          })
          .catch((error) => {
            console.log(error);
          });
      };
      

      const moveSlider = (event) => {
    const index = event.target.dataset.value;
    const currentImage = document.querySelector(`.img-${index}`);
    const images = document.querySelectorAll(".image");

    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    const bullets = document.querySelectorAll(".bullets span");
    bullets.forEach((bull) => bull.classList.remove("active"));
    event.target.classList.add("active");
  };

  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form 
            onSubmit={(e)=>{
              handleSubmit(e)
            }}
            autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src={logo} alt="easyclass" />
                <h4>O-Course</h4>
              </div>

              <div className="heading">
                <h2>Connectez-Vous</h2>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                  onInput={(e)=>{
                    setPseudo(e.target.value)
                  }}
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Pseudo</label>
                </div>

                <div className="input-wrap">
                  <input
                   onInput={(e)=>{
                    setPassword(e.target.value)
                  }}
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Mot de passe</label>
                </div>

                <button className="sign-btn">se connecter</button>

                {/* <p className="text">
                  Forgotten your password or your login details?
                  <a href="#">Get help</a> signing in
                </p> */}
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src={image1} className="image img-1 show" alt="" />
              <img src={image2} className="image img-2" alt="" />
              <img src={image3} className="image img-3" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Créez vos propres cours</h2>
                  <h2>Personnalisez comme vous le souhaitez</h2>
                  <h2>Invitez des élèves dans votre classe</h2>
                </div>
              </div>

              <div className="bullets">
                <span className="active" data-value="1" onClick={moveSlider}></span>
                <span data-value="2" onClick={moveSlider}></span>
                <span data-value="3" onClick={moveSlider}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Admin;
