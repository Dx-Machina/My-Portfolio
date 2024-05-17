import React from 'react'; // Import the React library
import './Introduction.css'; // Import the CSS file

const Introduction = () => {
  return (
    <div className="introduction"> {/* Add a class name for styling */}
      <div> {/* Add a div element to contain the content */}
        <h1>Hello, and Welcome to My Website</h1> {/* Add a heading element */}
        <p>Welcome to my personal portfolio. My Name is Youssef Hegazy, and i am a passionate software developer with expertise
          in C-Family of languages, Blockchain Technology, Web Development, and AI.
          I've built this website primarily to showcase my portfolio, my skills, and my projects.</p> {/* Add a paragraph element */}
        <img src="/PP.jpg" alt="Youssef H" /> {/* Added an image */}
      </div>
    </div>
  );
};

export default Introduction; // Export the Introduction component for use in other files
