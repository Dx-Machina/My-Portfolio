import React from 'react';
import './Projects.css';

const projects = [  // Create an array of project objects
  { // Add a project object
    title: 'Project PyOMy', // Add a project title
    description: "AI-voice assistant fused with OpenAI's ChatGPT. It produces voice and written responses.", // Add a project description
    link: 'https://github.com/Dx-Machina/PyOMy',  // Add a project link
  },
  {
    title: 'Crane Problem Solver',
    description: "Implements two algorithms that both solve the crane unloading problem. The first algorithm uses exhaustive optimization and takes exponential time. The second algorithm uses dynamic programming, and takes cubic time. Check back here regularly (and especially before your final submission), to make sure your submission complies with any changes or edits. You may check the top of the document, where the date of the last edit will be noted.The Exhaustive Optimization Algorithm, and The Dynamic Programming Algorithm.",
    link: 'https://github.com/Dx-Machina/CraneProblem',
  },
  {
    title: 'Socket Programming Web Server',
    description: "A simple web server implemented in Python using socket programming. The server can handle multiple client requests and serves static files.",
    link: 'https://github.com/Dx-Machina/471CC',
  },
  {
    title: 'ScroogeCoin',
    description: 'A simple blockchain-based cryptocurrency implemented in Java. ',
    link: 'https://github.com/Dx-Machina/ScroogeCoin',
  },
  // Add more projects as needed
];

const Projects = () => {  // Create a functional component for the Projects
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-list"> 
        {projects.map((project, index) => ( // Map over the projects array, Add a key prop to the div element, Add a heading element with the project title, Add a paragraph element with the project description, Add a link element with the project link.
          <div key={index} className="project">
            <h3>{project.title}</h3>  
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;  // Export the Projects component
