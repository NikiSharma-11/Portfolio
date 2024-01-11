import React from 'react'
import './About.css';
import Jump from 'react-reveal/Jump';
import img1 from '../../components/Menus/images/me.jpg';

const About = () => {
  return (
    <>
    <Jump>
    <div className="about" id='about'>
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={img1} alt="Profile_pic" />
            </div>
            <div className="col-md-6 about-content col-xl-6 col-lg-6 col-xs-12 ">
                <h1>About me</h1>
                <p>
                Hello, I'm Nikita, an aspiring Full-Stack Web Developer with a foundation in the MERN stack. As a recent entrant in the field, I am enthusiastic about combining MongoDB, Express.js, React, and Node.js to build responsive and functional web applications. My journey in web development is fueled by a relentless curiosity and a commitment to learning and growing with each project. I am passionate about exploring the endless possibilities of web technologies and am eager to contribute fresh perspectives to a dynamic team.
                </p>
            </div>
        </div>
    </div>
    </Jump>
    </>
  )
}

export default About