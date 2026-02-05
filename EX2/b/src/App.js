import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Registered: ${formData.name} (${formData.email})`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
      <h3>Register</h3>
      
      <input 
        type="text" name="name" placeholder="Full Name" 
        onChange={handleChange} required style={{ padding: '8px' }} 
      />
      
      <input 
        type="email" name="email" placeholder="Email Address" 
        onChange={handleChange} required style={{ padding: '8px' }} 
      />
      
      <input 
        type="password" name="password" placeholder="Password" 
        onChange={handleChange} required style={{ padding: '8px' }} 
      />
      
      <button type="submit" style={{ padding: '10px', background: 'blue', color: 'white', border: 'none' }}>
        Sign Up
      </button>
    </form>
  );
}
export default RegistrationForm;