
import React from 'react'
import navbarCss from './navbar.module.css';
import earthLogo from '../../assets/earth-fotor-bg-remover-20240228223612.png'

import { Link } from 'react-router-dom';

import { BsPeopleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={navbarCss.nav}>
        <header>
   
          
       <div className={navbarCss.logoCard}>
       <h1 className={navbarCss.header}>GeoTrackerX</h1>
            <img className={navbarCss.logo} src={earthLogo} alt="" />
       </div>

            <div className={navbarCss.icon}>
           
          
            <Link to="/sign-up">
            <BsPeopleFill size={28} />
            </Link>
            </div>

        </header>
    </div>
  )
}

export default Navbar