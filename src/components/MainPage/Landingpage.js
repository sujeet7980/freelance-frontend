import React from 'react'
import Navbar from './Navbar';
import Main from './Main';
import Account from './Account';
import Recent from './Recent';
import Category from './Category';
import Subscibe from './Subscibe';
import Footer from './Footer';
import Portfolio from './Portfolio';
import About from './About';
import './Main.css'
const Landingpage = () => {
  return (
      <>
       <Navbar/>
       <Main/>
       <About/>
       <Account/>
       <Recent/>
       <Category/>
       <Portfolio/>
       <Subscibe/>
       <Footer/> 
    </> 
  )
}

export default Landingpage