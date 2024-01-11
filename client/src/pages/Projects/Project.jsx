import React from 'react';
import './Project.css';
import proj from './img/proj1.png';
import proj2 from './img/proj2.png';
import proj3 from './img/proj3.png';

const Project = () => {
  return (
    <div className=" project" id='proj'>
      <h2 className='col-12 mt-3 mb-1 text-center'>RECENT PROJECTS</h2>
      <hr/>
      <p className='pb-3 text-center'>Here are my three recent projects with live link and source code</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ipsum ratione sed dolore expedita iure repellendus, aut sapiente, aperiam, aspernatur tempore quasi! Molestiae enim nihil doloribus unde veniam odit modi!</p>
     
      {/* Card design */}
      <div className="row" id="ads">
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">FULL STACK</span>
              <img src={proj} alt="project1"/>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">Node.js</span>
              <span className="card-detail-badge">Express.js</span>
              <span className="card-detail-badge">React.js</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>
            <div className="card-body">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">Canteen Management System</h5>
              </div>
              <a className='ad-btn' href='https://github.com/NikiSharma-11/CanteenManagementSystem'>View</a>
            </div>
          </div>
        </div>

        {/* proj2 */}
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">FULL STACK</span>
              <img src={proj2} alt="project2"/>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">Node.js</span>
              <span className="card-detail-badge">Express.js</span>
              <span className="card-detail-badge">React.js</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>
            <div className="card-body">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">Portolio Website</h5>
              </div>
              <a className='ad-btn' href='#'>View</a>
            </div>
          </div>
        </div>

      {/* Proj3 */}
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">FULL STACK</span>
              <img src={proj3} alt="project1"/>
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">Node.js</span>
              <span className="card-detail-badge">Express.js</span>
              <span className="card-detail-badge">React.js</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>
            <div className="card-body">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">Blog website</h5>
              </div>
              <a className='ad-btn' href='https://github.com/NikiSharma-11/Blog1/tree/master'>View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
