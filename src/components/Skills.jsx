import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Python', level: 'Advanced' },
  { name: 'Java', level: 'Advanced' },
  { name: 'C++', level: 'Legendary' },
  { name: 'Blockchain', level: 'Intermediate' },
  { name: 'FE Web Development', level: 'Intermediate' },
  { name: 'AI', level: 'Intermediate' },
  { name: 'Databases', level: 'Intermediate'},
  { name: 'Data Structures', level: 'Advanced' },
  { name: 'Algorithms Engineering', level: 'Advanced' },
  { name: 'Computer Communications', level: 'Advanced'}

  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills and Expertise</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
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
