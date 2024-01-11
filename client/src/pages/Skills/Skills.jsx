import React from 'react'
import './Skills.css';
import Fade from 'react-reveal/Fade';
import { SkillList } from '../../utils/SkillList';

const Skills = () => {
  return (
    <>
    <div className="container skills" id='skills'>
        <h2 className='col-12 mt-3 mb-1 text-center'>MY SKILLS</h2>
        <hr/>
        <p className='"pb-3 text-center'>👉including programming languages, frameworks, databases, front-end and back-end tools and api
        </p>
    </div>
    <div className="row skillList">
        {SkillList.map((skill) =>(
            <Fade left>
            <div key={skill._id} className="col-md-3">
                <div className="card m-2">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex justify-content-center">
                                <div className="align-self-center">
                                <skill.icon className="skills-icon" />
                                </div>
                                <div className="media-body">
                                    <h5>{skill.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        ))}
    </div>
    </>
  )
}

export default Skills