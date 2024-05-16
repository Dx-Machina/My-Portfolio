import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project PyOMy',
    description: "AI-voice assistant fused with OpenAI's ChatGPT. It produces voice and written responses.",
    link: 'https://github.com/Dx-Machina/PyOMy',
  },
  {
    title: 'ScroogeCoin',
    description: 'A simple blockchain-based cryptocurrency implemented in Java. ',
    link: 'https://github.com/Dx-Machina/ScroogeCoin',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
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

export default Projects;
