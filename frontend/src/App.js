import React from 'react';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

