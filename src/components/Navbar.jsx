import React from 'react';                
import { Link } from 'react-router-dom';    // Import the Link component
import './Navbar.css';                      // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">                  {/* Add a class name for styling */}
      <Link to="/Introduction">Home </Link>   {/* Add a Link to Introduction component */}
      <Link to="/skills">Skills </Link>       {/* Add a Link to Skills component */}
      <Link to="/projects">Projects </Link>   {/* Add a Link to Projects component */}
      <Link to="/contact">Contact </Link>     {/* Add a Link to Contact component */}   
    </nav>
  );
};

export default Navbar;
