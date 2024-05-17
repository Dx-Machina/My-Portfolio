import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the BrowserRouter, Route, and Routes components

import Navbar from './components/Navbar';                                  // Import the Navbar component
import Introduction from './components/Introduction';                      // Import the Introduction component
import Skills from './components/Skills';                                  // Import the Skills component
import Projects from './components/Projects';                              // Import the Projects component
import Contact from './components/Contact';                                // Import the Contact component

function App() {
  return (
    <Router>                                                                {/* Wrap the entire application in the Router component */}
      <Navbar />                                                            {/* Add the Navbar component */}
      <Routes>                                                              {/* Add the Routes component */}
        <Route path="/Introduction" element={<Introduction />} />           {/* Add the Introduction component */}
        <Route path="/skills" element={<Skills />} />                       {/* Add the Skills component */}
        <Route path="/projects" element={<Projects />} />                   {/* Add the Projects component */}
        <Route path="/contact" element={<Contact />} />                     {/* Add the Contact component */}
      </Routes>                                                             {/* Close the Routes component */}
    </Router>   
  );
}

export default App;                                                       // Export the App component           