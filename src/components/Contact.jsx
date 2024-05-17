import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {                           // Create a functional component for the Contact
  const [formData, setFormData] = useState({      // Create a state variable for the form data
    name: '',                                     // Add a name field to the form data, Initialize the name field with an empty string.
    email: '',                                    // Add an email field to the form data, Initialize the email field with an empty string.
    message: '',                                  // Add a message field to the form data, Initialize the message field with an empty string.
  });

  const handleChange = (e) => {                   // Create a function to handle form changes        
    const { name, value } = e.target;             // Destructure the name and value from the target
    setFormData({ ...formData, [name]: value });  // Update the form data with the new value
  };

  const handleSubmit = (e) => {                   // Create a function to handle form submission
    e.preventDefault();                           // Prevent the default form submission behavior   
    
    // Not Implemented yet. Handle form submission logic (e.g., send data to a server) 
    
    console.log(formData);                       // Log the form data to the console
  };

  return (  
    <div className="contact">                    {/* Add a class name for CSS styling */}      
      <h2>About Me</h2>   
      <p>My Name is Youssef Hegazy</p>
      <p>My Email is: YoussefH@CSU.Fullerton.edu</p>     
      <p>Have a question or want to work together?</p>
      <h2>Contact Me</h2>
      <p>Fill out the form below, and I'll get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit}>            {/* Add a form element with an onSubmit event handler */}
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />      {/* Add an input element for the name field */}
        <input type="email" name="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange} required />  {/* Add an input element for the email field */}
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea> {/* Add a textarea element for the message field */}
        <button type="submit">Send</button>    {/* Add a button to submit the form */}
      </form>

      <h2>Let's Link up </h2>
      <a href="https://github.com/Dx-Machina" target="_blank" rel="noopener noreferrer">  {/* Added a link to My GitHub profile */}
          <img src="/github-icon.png" alt="GitHub" className="social-icon"/>  {/* Added an image for the GitHub icon */}
          <a href="https://linkedin.com/in/dx-machina" target="_blank" rel="noopener noreferrer">   {/* Added a link to My LinkedIn profile */}
            <img src="/In-icon.png" alt="LinkedIn" className="social-icon"/>  {/* Added an image for the LinkedIn icon */}
          </a>
      </a>
    </div>
  );
};
export default Contact; // Export the Contact component