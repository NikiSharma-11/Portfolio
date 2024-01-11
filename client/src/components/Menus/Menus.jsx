import React from 'react'
import './Menus.css';
import Zoom from 'react-reveal/Zoom';  //for animation effecet
import Fade from 'react-reveal/Fade';
import img1 from "./images/me.jpg";
import { IoHome, IoCodeWorkingSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdCastForEducation, MdOutlineContactSupport  } from "react-icons/md";
import { GiSkills, GiFilmProjector  } from "react-icons/gi";
import { Link } from 'react-scroll'; //for navigation when page is clicked


const Menus = ({ toggle }) => {
  return (
   <>
   {toggle ? (
    <>
    <Zoom>
    <div className="navbar-profile-pic">
    <img src={img1} alt="profile pic"  />
   </div>
    </Zoom>
    <Fade left>
   <div className="nav-items">
    <div className="nav-item">
        <div className="nav-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <IoHome />Home
            </Link>
            </div>
           
    </div>

    <div className="nav-item">
        <div className="nav-link">
            <Link to="about" spy={true} smooth={true } offset={-100} duration={100}>
            <FcAbout />About
            </Link>
            </div>
            
    </div>
    
    <div className="nav-item">
        <div className="nav-link">
            <Link to="education" spy={true} smooth={true } offset={-100} duration={100} >
            <MdCastForEducation />Education Details
            </Link>
            </div>
    </div>
   
    <div className="nav-item">
        <div className="nav-link">
            <Link to="skills" spy={true} smooth={true } offset={-100} duration={100}>
            <GiSkills />Skills
            </Link>
            </div>
    </div>

    <div className="nav-item">
        <div className="nav-link">
            <Link to="proj" spy={true} smooth={true } offset={-100} duration={100}>
            <GiFilmProjector />Projects
            </Link>
            </div>
    </div>
    <div className="nav-item">
        <div className="nav-link">
            <Link to="work" spy={true} smooth={true } offset={-100} duration={100}>
            <IoCodeWorkingSharp /> Work Experience
            </Link>
            </div>
    </div>

    <div className="nav-item">
        <div className="nav-link">
            <Link to="contact" spy={true} smooth={true } offset={-100} duration={100}>
            <MdOutlineContactSupport /> Contact
            </Link>
            </div>
    </div>

   </div>
   </Fade>
   </>
   ):(
    <>
    <div className="nav-items">
    <div className="nav-item">
        <div className="nav-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <IoHome />
            </Link>
            </div>
           
    </div>

    <div className="nav-item">
        <div className="nav-link">
            <Link to="about" spy={true} smooth={true } offset={-100} duration={100}>
            <FcAbout />
            </Link>
            </div>
            
    </div>
    
    <div className="nav-item">
        <div className="nav-link">
            <Link to="education" spy={true} smooth={true } offset={-100} duration={100} >
            <MdCastForEducation />
            </Link>
            </div>
    </div>
   
    <div className="nav-item">
        <div className="nav-link">
            <Link to="skills" spy={true} smooth={true } offset={-100} duration={100}>
            <GiSkills />
            </Link>
            </div>
    </div>

    <div className="nav-item">
        <div className="nav-link">
            <Link to="proj" spy={true} smooth={true } offset={-100} duration={100}>
            <GiFilmProjector />
            </Link>
            </div>
    </div>
    <div className="nav-item">
        <div className="nav-link">
            <Link to="work" spy={true} smooth={true } offset={-100} duration={100}>
            <IoCodeWorkingSharp /> 
            </Link>
            </div>
    </div>

    <div className="nav-item">
        <div className="nav-link">
            <Link to="contact" spy={true} smooth={true } offset={-100} duration={100}>
            <MdOutlineContactSupport /> 
            </Link>
            </div>
    </div>

   </div>
    </>
   )}
   </>
  )
}

export default Menus