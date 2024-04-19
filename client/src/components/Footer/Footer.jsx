import React from 'react';
import logo from '../../asset/logo.png';
import './footer.css';
import { Link } from 'react-router-dom';
import 'boxicons'

const Footer = () => {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
			   <div className="logo_footer">
			   <a href=""><img src={logo} alt=""/></a>
				</div>
  	 			<ul>
				   <li><i></i>esiguniv25@esig.tg</li>
  	 				<li><i></i>+228 98527887</li>
  	 				<li><i></i>Bè-kpota boulevard de l'ôti</li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Menu</h4>
  	 			<ul class="menu_nav">
                <li className="nav_item"> <Link className='nav_link' to='/'>Accueil</Link> </li>
                <li className="nav_item"> <Link className='nav_link' to='/about-us'>A propos de nous</Link> </li>
                <li className="nav_item"> <Link className='nav_link' to='/contact'>Contact</Link> </li>
            </ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Organisation </h4>
  	 			<ul>
  	 				<li><a href="#">Condition</a></li>
  	 				<li><a href="#">Politique de confidentialité</a></li>
  	 				<li><a href="#">Plan du site</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Réseaux sociaux</h4>
  	 			<div class="social-links">
  	 				<a href="#"><box-icon name='facebook-circle' type='logo' ></box-icon></a>
  	 				<a href="#"><box-icon name='twitter' type='logo' ></box-icon></a>
  	 				<a href="#"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default Footer