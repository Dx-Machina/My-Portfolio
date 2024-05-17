import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <div className="contact">
      <h2>About Me</h2>
      <p>My Name is Youssef Hegazy</p>
      <p>My Email is: YoussefH@CSU.Fullerton.edu</p>     
      <p>Have a question or want to work together?</p>
      <h2>Contact Me</h2>
      <p>Fill out the form below, and I'll get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send</button>
      </form>
      {/* Add your GitHub and LinkedIn links */}
      <h2>Let's Link up </h2>
      <a href="https://github.com/Dx-Machina" target="_blank" rel="noopener noreferrer"> 
          <img src="/github-icon.png" alt="GitHub" className="social-icon"/>
          <a href="https://linkedin.com/in/dx-machina" target="_blank" rel="noopener noreferrer"> 
            <img src="/In-icon.png" alt="LinkedIn" className="social-icon"/>
          </a>
      </a>
    </div>
  );
};
export default Contact;