// ramenApp/src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Inventory from './pages/inventory';
import MobileOrder from './pages/mobileOrder';
import POS from './pages/POS';
import SalesReport from './pages/salesReport';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            {/* Default route to show the Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/mobile-order" element={<MobileOrder />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/sales-report" element={<SalesReport />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
