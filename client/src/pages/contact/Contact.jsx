import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
      <div className='contact_us_bloc'>
        <section className='contact_us_section'>
          <div className='contact_us_tittle'>
            <h1>Nous contacter</h1>
          </div>
          <div className='contact_text'>
            <p>Que vous soyez un particulier cherchant à perfectionner ses compétences ou une entreprise à la recherche de solutions de développement professionnel, nous avons un plan qui vous convient. 
              Découvrez nos options de tarification ci-dessous et choisissez celle qui correspond le mieux à vos besoins.</p>
          </div>
        </section>
        <div className='contact_line'></div>

      <section className='contact_form'>
        <form className='formular'>
          <div className='contact_row'>
          <div className='contact_bloc'>
            <div className='contact_form_add'>
              <label>Nom</label>
              <input type="text" minLength="4" className="input_add cont" autoComplete="off" placeholder='Entrez votre nom'required/>
            </div>
            <div className='contact_form_add'>
              <label>Prénom</label>
              <input type="text" minLength="4" className="input_add cont" autoComplete="off" placeholder='Entrez votre prénom'required/>
            </div>
          </div>

          <div className='contact_bloc'>
            <div className='contact_form_add'>
              <label>Email</label>
              <input type="text" minLength="4" className="input_add cont" autoComplete="off" placeholder='Entrez votre email'required/>
            </div>
            <div className='contact_form_add'>
              <label>Numéro</label>
              <input type="number" minLength="4" className="input_add cont" autoComplete="off" placeholder='Entrez votre numéro 'required/>
            </div>
          </div>
          </div>

          <div className='contact_column'>
            <div className='contact_column_add'>
              <label>Sujet</label>
              <input type="text" minLength="4" className="input_add cont" autoComplete="off" placeholder='Entrez votre sujet 'required/>
            </div>

            <div className='contact_column_add'>
            <label>Message</label>
              <textarea type="text-area" minLength="4" className="msg_input" autoComplete="off" placeholder='Entrez votre message 'required/>
            </div>
          </div>

          <div className='contact_column_btn'>
              <button className='contact_btn' type="submit">Envoyer</button>
          </div>
        </form>

        <div className='info_contact'>

          <div className='info_contact_div'>
          <box-icon type='solid' name='envelope'></box-icon>
            esiguniv25@esig.tg
          </div>
          <div className='info_contact_div'>
          <box-icon type='solid' name='phone'></box-icon>
            +228 98527887
          </div>
          <div className='info_contact_div'>
          <box-icon type='solid' name='map'></box-icon>
            Bè-kpota boulevard 
          </div>

        </div>
          

      </section>
    </div>
  )
}

export default Contact