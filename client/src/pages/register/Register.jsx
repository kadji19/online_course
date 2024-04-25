import { useState } from "react"
import React  from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import student_2 from '../../asset/étu 1.jpeg'

const Register = () => {

  const [lastname, setLastname] = useState("")
  const [firstname, setFirstname] = useState("")
  const [mdp, setMdp] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  let handleSubmit =(e)=>{
    e.preventDefault()
    
    let data ={
        lastname,firstname,mdp,email
    }
    console.log(data)
    axios.post("http://localhost:5000/student/signup",data).then((reponse)=>{
  console.log(reponse)
  localStorage.setItem("token",reponse.data.accessToken)
  navigate('/login')
 

}).catch((error)=>{
    console.log(error)
  })
}

  return (
    <div className='register_bloc'>
    <section className="register">
    <div className="testimonial">

      <div className='testimonial_text'>
      <h1>Témoignages de nos étudiants</h1><br />

        <div className='testimonial_text'><p>La technologie et le monde du travail évoluent rapidement. Avec nous, vous êtes plus rapide.
        Obtenez les compétences pour atteindre vos objectifs et rester compétitif.</p></div>
      </div>
      <div className='testimonial_image'>
        <img className='testimony_img' src= {student_2} alt="" />
      </div>

    </div>
    <div className='testimonial_line'></div>
    <form  
    onSubmit={(e) => {
      handleSubmit(e)
    }}
    autoComplete="off" className="form_register">

<div className="register-card">
  <br />
  <h1>Inscription</h1>
</div> 
<div className='register_word'>
  <p>Créez un compte pour débloquer des fonctionalités exclusives!</p>
</div><br /><br />

<div className="form_add_register">
<div className="input">
  <label>Nom: </label>
  <input 
  onChange={(e)=>{setLastname(e.target.value)}}
  type="text" minLength="4" className="input_add" autoComplete="off" placeholder='Entrez votre nom'required
  />
</div>
<div className="input">
  <label>Prenom: </label>
  <input 
  onChange={(e)=>{setFirstname(e.target.value)}}
  type="text" minLength="4" className="input_add" autoComplete="off" placeholder='Entrez votre prenom'required
  />
</div>

<div className="input">
  <label>Email</label>
  <input
  onChange={(e)=>{setEmail(e.target.value)}} 
  type="text" minLength="4" className="input_add" autoComplete="off" placeholder='Entrez votre email'required/>
</div>


<div className="input">
  <label>Mot de passe</label>
  <input
  onChange={(e)=>{setMdp(e.target.value)}}
   type="password" minLength="4" className="input_add" autoComplete="off" placeholder='Entez votre mot de passe'required/>
</div>

<button type="submit" className="register_btn">Soumettre</button>
<span>ou</span>
  <p>Déjà un compte? <a href=""><strong>Connectez-vous.</strong></a> </p>
  </div>
</form>
    </section>      
  </div>


  )
}

export default Register