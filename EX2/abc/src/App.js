import React, { useState } from 'react';

function AadharCardSwap() {
  const [isFront, setIsFront] = useState(true);


  const cardStyle = {
    border: '1px solid #333',
    borderRadius: '10px',
    padding: '20px',
    width: '320px',
    height: '200px', 
    backgroundColor: '#fdfdfd',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  return (
    <div>
      <div style={cardStyle}>
        {}
        {isFront ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
              <div style={{ width: '40px', height: '40px', background: 'orange', borderRadius: '50%', marginRight: '10px' }}></div>
              <h4 style={{ margin: 0 }}>Government of India</h4>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ width: '80px', height: '80px', background: '#ddd' }}>{}</div>
              <div style={{ fontSize: '14px' }}>
                <p style={{ margin: '2px 0' }}><strong>Name:</strong> john doe</p>
                <p style={{ margin: '2px 0' }}><strong>DOB:</strong> 1/1/2005</p>
                <p style={{ margin: '2px 0' }}><strong>Gender:</strong> Male</p>
              </div>
            </div>
            <h3 style={{ textAlign: 'center', marginTop: '10px', letterSpacing: '2px' }}>4589 1234 9876</h3>
          </div>
        ) : (
          
          <div>
            <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
              <h4 style={{ margin: 0 }}>Address Details</h4>
            </div>
            <div style={{ fontSize: '13px', lineHeight: '1.4' }}>
              <p style={{ margin: '0' }}><strong>Address:</strong></p>
              <p style={{ margin: '0' }}>S/O: Suresh Kumar</p>
              <p style={{ margin: '0' }}>#123, Gandhi Street, Anna Nagar</p>
              <p style={{ margin: '0' }}>Chennai, Tamil Nadu - 600040</p>
            </div>
          
          </div>
        )}
      </div>

      {}
      <div style={{ marginTop: '15px' }}>
        <button 
          onClick={() => setIsFront(!isFront)} 
          style={{ padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          View {isFront ? "Back" : "Front"} Side
        </button>
      </div>
    </div>
  );
}
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
function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', width: '200px' }}>
      <h2>Count: {count}</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setCount(count - 1)} style={{ padding: '5px 15px' }}> - </button>
        <button onClick={() => setCount(0)} style={{ padding: '5px 15px' }}> Reset </button>
        <button onClick={() => setCount(count + 1)} style={{ padding: '5px 15px' }}> + </button>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', padding: '50px' }}>
      <AadharCardSwap />
      <RegistrationForm />
      <CounterApp />
    </div>
  );
}
