import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css'
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className='App'>
      <Router>
          <Routes>
            <Route path='/*' element={<Layout/>} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
