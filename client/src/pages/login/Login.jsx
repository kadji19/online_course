import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import student_1 from '../../asset/learn6.jpg'


const Login = () => {
  const [mdp, setMdp] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()


  const handleSubmit= (e)=>{
    e.preventDefault()
    const data = {email,mdp}
    console.log(data)
      axios.post("http://localhost:5000/student/login",data).then((reponse)=>{
      console.log(reponse.data)
      localStorage.setItem("token",reponse.data.accessToken)
    navigate("/category")})
      .catch((error)=>{
        console.log(error)
      })
  }


  return (

  <div className='login_bloc'>
    <section className="login">
    <form 
    onSubmit={(e)=>{
      handleSubmit(e)
    }}
    autoComplete="off" className="form_login">

<div className="log-card">
  <br />
  <h1>Connexion</h1>
</div> 
<div className='login_word'>
  <p>Content de vous revoir! Veuillez vous connecter pour accéder à votre compte.</p>
</div><br /><br />

<div className="form_add_login">
<div className="input">
  <label>Email</label>
  <input 
    onInput={(e)=>{
      setEmail(e.target.value)
    }}
  type="text" minLength="4" className="input_add" autoComplete="off" placeholder='Entrer votre email'required/>
</div>

<div className="input">
  <label>Mot de passe</label>
  <input
    onInput={(e)=>{
      setMdp(e.target.value)
    }}
  type="password" minLength="4" className="input_add" autoComplete="off" placeholder='Entez votre mot de passe'required/>
</div>

<button type="submit" className="connect_btn">Se connecter</button>
  </div>
  <div className="ver_login">
<span>ou</span>
<p>Pas de compte? <a href=""><strong>créez-en.</strong></a> </p>
</div>
</form>
<div className="testimony">

{/* <div className='testimony_text'>
<h1>Acquérir des compétences qui ont de l'avenir de nos jours!</h1><br />

  <div className='testimony_text_2'><p>La technologie et le monde du travail évoluent rapidement. Avec nous, vous êtes plus rapide.
  Obtenez les compétences pour atteindre vos objectifs et rester compétitif.</p></div>
</div> */}
  <img className='testimony_img' src= {student_1} alt="" />
{/* <div className='testimony_image'>
</div> */}

</div>
    </section>      
  </div>
  )
}

export default Login