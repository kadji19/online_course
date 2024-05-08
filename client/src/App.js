import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Layout from './components/layout/Layout';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<Layout />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
