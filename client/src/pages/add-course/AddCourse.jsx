import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../asset/logo.png';
import './add-course.css';
import {useNavigate} from 'react-router-dom'

const AddCourse = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [movie, setMovie] = useState({})
  const [name, setName] = useState("")
  const [descrip, setDescrip] = useState("")
  const navigate = useNavigate()
 const handleFileSelected = (e)=>{
   setMovie(e.target.files[0])
 }

 const handleSubmit = (e)=>{
  e.preventDefault()
  const formData = new FormData()
  formData.append('video',movie)
  formData.append("name",name)
  formData.append("descrip",descrip)
  formData.append('id_categorie', selectedCategory)
  console.log(name, descrip, selectedCategory, movie)
  axios.post("http://localhost:5000/course/add",formData)
  .then((res)=>{
  console.log(res)
  /* navigate('/*') */
})
.catch((error)=>{
  console.log(error)
})

}
  useEffect(() => {
    axios.get('http://localhost:5000/category/select')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des catégories:', error);
      });
  }, []); 

  return (
    <div className='add_course'>
      <form 
      onSubmit={(e)=>{handleSubmit(e)}}
      autoComplete="off" className="form">

        <div className="add_course_title">
          <h2>Ajout de cours</h2>
        </div>

        <div className="form_add">
          <div className="input">
            <label>Libellé du cours</label>
            <input
           onInput={(e)=>{
            setName(e.target.value)
           }}
           value={name}
              type="text"
              minLength="4"
              className="input_add"
              autoComplete="off"
              placeholder='Entrer le libellé du cours'
              required
            />
          </div>

          <div className="input">
            <label>Description</label>
            <input
           onInput={(e)=>{
            setDescrip(e.target.value)
           }}
           value={descrip}
              type="text"
              minLength="4"
              className="input_add"
              autoComplete="off"
              placeholder='Entrer la description'
              required
            />
          </div>

          <div className="input">
            <label>Catégorie</label>
            <select
              className='input_add'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Sélectionner une catégorie</option>
              {categories.map(category => (
                <option key={category.id_categorie} value={category.id_categorie}>
                  {category.libelle}
                </option>
              ))}
            </select>
          </div>
                <div>
                <input type="file" onChange={(e)=>{handleFileSelected(e)}}/>
                </div>


          <button type='submit'  className="sign-btn add_course_btn">Soumettre</button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;