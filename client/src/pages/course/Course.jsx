import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './course.css'
/* import  axiosPrivate  from '../../api/axiosPrivate'; */

const Course= ({ categoryId }) => { 
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('token');
  console.log(categoryId)

  useEffect(() => {
    axios.post(
      `http://localhost:5000/course/categorieAllCourse`,
      { categoryId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
     .then(response => {
        setCourses(response.data);
        console.log(response.data);
        console.log(categoryId);
      })
     .catch(error => {
        console.error('Error fetching courses by category:', error);
      });
  }, [categoryId]);
  return (
    <div className='comp_course'>
      <h2>Cours de la catégorie</h2>
      <section className="course">
      {courses.map((course) => (
        <div key={course.id_cours} className="course_detaill">
          <div className="course_video">
            <video src={course.Media} className="video_course" controls></video>
          </div>
          <div className="course_des">
            <div className="course_des_title"><span className='span_title'>{course.libelle_cours}</span></div>
{/*             <div className="course_des_time">{course.duration}</div> */}
            <div className="course_des_description"><p className='des_p'>{course.Description_cours}</p></div>
          </div>
        </div>
      ))}
    </section>
    </div>
  );
}

export default Course;
