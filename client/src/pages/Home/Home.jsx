import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import './home.css';
import Fade from 'react-reveal/Fade';
import Resume from '../../assets/docs/Resume.pdf';
import { BsMoonStarsFill, BsFillSunFill  } from "react-icons/bs";
 


const Home = () => {
   const[theme, setTheme]=useTheme(); //value haru distructure gareko

   //function to handle theme
   const handleTheme= ()=>{
    setTheme((prevState)=> (prevState === 'light' ? 'dark': 'light'));  //when clicked light theme xa bhane dark ma change dark xa bhane light ma change garna help garxa

   }
  return (
    <>
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
         {theme === 'light' ? (<BsMoonStarsFill size={30} />):(<BsFillSunFill size={30} />)}
      </div>
      <div className="container home-content">
        <Fade right>
        <h2>Hi👋 I am a </h2>
        <h1>
        <Typewriter
  options={{
    strings: [
              "Full Stack Web Developer!",
              "MERN Stack Developer!"
            ],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        </Fade>

        <Fade bottom>
        <div className="home-buttons">
        <a href="mailto:neekitasharma24@gmail.com" className="btn btn-hire-link">
        <button className="btn btn-hire">Hire Me</button>
        </a>
          <a className=" btn btn-cv" href={Resume} download="Nikita.pdf"> My Resume</a>
        </div>
        </Fade>
      </div>
    </div>
    </>
  )
}

export default Home