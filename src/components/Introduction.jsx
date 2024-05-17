import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="introduction" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1>Hello, and Welcome to My Website</h1>
        <p>Welcome to my personal portfolio. I am a passionate software developer with expertise in C-Family of languages, Blockchain Technology, Web Development, and AI.</p>
        <img src="path/to/your/photo.jpg" alt="Youssef H" />
      </div>
    </div>
  );
};

export default Introduction;
