import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import Otp from './Otp'
import Register from './Register'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </div>
  );
}

export default App;
