import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
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

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills and Expertise</h2>
      <p>Here are some of the skills I have acquired over the years.</p>
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
