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
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Youssef Hegazy" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="YoussefH@CSU.Fullerton.edu" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Thank You !!" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;