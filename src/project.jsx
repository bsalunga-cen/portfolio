/* 
File Name: project.jsx
Student Name: Bianca Salunga
Student ID: 301385026
Date: Sep. 19, 2024
*/

import React from 'react';
import projectImage1 from '../src/assets/project1.png';
import projectImage2 from '../src/assets/project2.png';
import projectImage3 from '../src/assets/project3.png';

const projects = [
    {
      id: 1,
      title: 'Serenity Spa Website',
      image: projectImage1,
      description: 'This is a COMP213 term project to create a resort spa website consisting of 7 pages. The Term Project consist of 2 members. I develop the following pages: Home page, 3 Services pages, and available services provided by the Spa.',
      tools: 'HTML, CSS',
      link: 'http://studentweb.cencol.ca/bsalunga/project/project.html',
    },
    {
      id: 2,
      title: 'Drag and drop using JS',
      image: projectImage2,
      description: 'This is a COMP125 assignment to develop a drag and drop feature using JavaScript. In this task, the page must allow the user to drag and drop the draggable image element inside a container.',
      tools: 'HTML, CSS, Javascript',
      link: 'http://studentweb.cencol.ca/bsalunga/comp125/Assignment4/BiancaSalunga_Assignment4.html',
    },
    {
      id: 3,
      title: 'Screening Eagle: Inspect',
      image: projectImage3,
      description: 'This is the Inspect web which empower owners, inspectors & engineers to protect the structural health of assets. There is iPadOS and iOS application available as well.',
      role: 'Software QA Engineer',
      reference: '*Reference: https://web.screeningeagle.com/',
      link: 'https://web.screeningeagle.com/home',
    },
  ];
  
  const Projects = () => {
    return (
      <div className="projects-section">
        <h2 className='h2-section'>Projects.</h2>
        <p>Here are some projects I've worked on</p>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="project-image"
                />
              </a>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.tools}</p>
              <p>{project.role}</p>
              <p><i>{project.reference}</i></p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;