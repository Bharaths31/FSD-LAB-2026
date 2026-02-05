import React, { useState } from 'react';

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
export default CounterApp;