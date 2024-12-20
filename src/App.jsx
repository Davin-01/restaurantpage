import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Fruits from './Pages/Fruits';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 text-night-100 p-4 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruits" element={<Fruits />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
