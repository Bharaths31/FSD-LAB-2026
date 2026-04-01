import React, { useState, useEffect } from 'react';

export default function App() {
  // Store the form inputs
  const [form, setForm] = useState({ name: '', email: '', interest: '' });
  // Store the data from the database
  const [dbData, setDbData] = useState([]);

  // Function to load data from the backend
  const loadData = () => {
    fetch('http://localhost:5000/api/forms')
    .then(response => response.json())
    .then(data => setDbData(data));
  };

  // Load data automatically when the app starts
  useEffect(() => {
    loadData();
  }, []);

  // Function to send data to the backend when "Submit" is clicked
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    fetch('http://localhost:5000/api/forms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => {
      alert('Saved to Database!');
      loadData(); // Refresh the list automatically
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>

    {/* --- FORM SECTION --- */}
    <h2>1. Simple Entry Form</h2>
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="Name"
    onChange={e => setForm({ ...form, name: e.target.value })}
    required
    /><br/><br/>

    <input
    type="email"
    placeholder="Email"
    onChange={e => setForm({ ...form, email: e.target.value })}
    required
    /><br/><br/>

    <input
    type="text"
    placeholder="Interest (e.g., Coding)"
    onChange={e => setForm({ ...form, interest: e.target.value })}
    required
    /><br/><br/>

    <button type="submit">Save to MongoDB</button>
    </form>

    <hr style={{ margin: '30px 0' }} />

    {/* --- DATA VIEW SECTION --- */}
    <h2>2. Database Records (lab-007)</h2>
    <button onClick={loadData}>Refresh List</button>

    <ul>
    {dbData.map((item, index) => (
      <li key={index}>
      <strong>{item.name}</strong> - {item.email} - {item.interest}
      </li>
    ))}
    </ul>

    </div>
  );
}
