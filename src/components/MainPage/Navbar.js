import React from 'react'
import {Link} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='Navbar' data-aos="fade-down">
      <div className='company-name'>
        <img src='company_logo.jpg'></img>
        <span>Freelancable</span>
      </div>
      <div className='menu'>
        <Link to='/'>Home</Link>
        <Link href='/'>Find work</Link>
        <Link href='/'>Find Freelancers</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
        <button className="project-link" role="button">Post a Project</button>
      </div>
    </div>
  )
}

export default Navbar