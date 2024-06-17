import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/main')
      .then(response => {
        setMessage(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching main page message:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Main Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
