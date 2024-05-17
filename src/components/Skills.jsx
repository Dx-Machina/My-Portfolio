import React from 'react';                                                                  // Import the React library
import './Skills.css';                                                                      // Import the CSS file 

const skills = [                                                                            // Create an array of skills objects
  { name: 'JavaScript', level: 'Advanced' },                                                // Add a skill object      
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'React js', level: 'Intermediate' },
  { name: 'C', level: 'Intermediate' },
  { name: 'C#', level: 'Intermediate' },
  { name: 'C++', level: 'Legendary' },
  { name: 'Python', level: 'Advanced' },
  { name: 'Java', level: 'Advanced' },
  { name: 'MIPS Assembly', level: 'Intermediate' },
  { name: 'x86 Assembly', level: 'Intermediate' },
  { name: 'Blockchain Technology', level: 'Advanced' },
  { name: 'Front End Web Development', level: 'Intermediate' },
  { name: 'Artificial Intelligence', level: 'Intermediate' },
  { name: 'Relational Databases', level: 'Intermediate'},
  { name: 'Data Structures', level: 'Advanced' },
  { name: 'Algorithms Engineering', level: 'Advanced' },
  { name: 'Computer Communications', level: 'Advanced'}
  // Add more skills as needed
];

const Skills = () => {                                                                        // Create a functional component for the Skills
  return (
    <div className="skills">                                                                  {/* Add a class name for styling */}      
      <h2>Skills and Expertise</h2>   
      <p>Here are some of the skills I have acquired over the years.</p>
      <div className="skills-list">
        {skills.map((skill, index) => (   // Map over the skills array, Add a key prop to the div element, Add a heading element with the skill name, Add a paragraph element with the skill level     
          <div key={index} className="skill">                                        
            <h3>{skill.name}</h3>                                                          
            <p>{skill.level}</p>                                                           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
