import React, { useEffect, useState } from 'react';
import { Routes, Route, } from "react-router-dom";
import './App.css';
import RefactorDirectory from './pages/refactorDirectory';
import Home from './pages/home';
import UploadFiles from './pages/uploadFiles';
import Navbar from './components/navbar';

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
    <div className="">

      {/* navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refactor-directory" element={<RefactorDirectory />} />
        <Route path="/upload-files" element={<UploadFiles />} />
      </Routes>
    </div>
  );
}

export default App;