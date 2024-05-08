import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './category.css';
import { Link, useNavigate } from 'react-router-dom';

const Category = ({selectedCategory, setSelectedCategory,setCategoryId}) => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/category/select')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []); 

/*   const handleClickCategory = (categoryId) => {
    setSelectedCategory(categoryId, () => {
      Navigate('/course')
      setCategoryId(categoryId)
      console.log(selectedCategory);
    });
  }; */
  

  return (
    <div className='bloc_category'>
      <section className="category">
        <h2>Catégories de cours</h2>
        <ul className="cat_wrap">
          {categories.map(category => (
            <li 
              className="cat_course" 
              value={selectedCategory}
              key={category.id_categorie}
             /*  onClick={() => handleClickCategory(category.id_categorie)} */
              onClick={()=>{
                setCategoryId(category.id_categorie)
                setSelectedCategory(category.id_categorie)
                navigate('/course')
          /*       console.log(selectedCategory) */
                 }}
            >
            <Link className='cat_couse_link' to={`/course/${category.id_categorie}`}>{category.libelle}</Link>
            {/*   {category.libelle} */}

            </li>
          ))}
        </ul>
      </section>
      {/* {selectedCategory && <Course categoryId={selectedCategory} />} */}
    </div>
  );
}

export default Category;
