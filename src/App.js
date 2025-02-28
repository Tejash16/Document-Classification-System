import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if running in Electron
    if (window.api) {
      // Listen for messages from main process
      window.api.receive('fromMain', (data) => {
        setMessage(data);
      });
      
      // Send a message to main process
      window.api.send('toMain', 'Hello from React!');
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className='font-arial font-bold text-[100px] text-blue-900 flex justify-center '>Orbix Lab</div>        
      </header>
    </div>
  );
}

export default App;