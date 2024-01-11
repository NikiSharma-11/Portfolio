import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";
import './Education.css'

const Education = () => {
  return (
    <>
        <div className="education" id='education'>
      <h2 className='col-12 mt-3 mb-1 text-center'>EDUCATION DETAILS</h2>
      <hr/>
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white'}}
    date="2019 - 2024"
    iconStyle={{ background: 'rgba(0, 128, 51, 0.753)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BIM</h3>
    <h4 className="vertical-timeline-element-subtitle">Tribhuwan University</h4>
  </VerticalTimelineElement>
  
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white'}}
    date="2017 - 2019"
    iconStyle={{ background: 'rgba(0, 128, 51, 0.753)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Management</h3>
    <h4 className="vertical-timeline-element-subtitle">Gorkha Secondary School</h4>
  </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Education;