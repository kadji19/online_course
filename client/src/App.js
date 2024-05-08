import {BrowserRouter as Router, Routes, Route, useLocation,} from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css'
import Admin from './pages/admin/Admin';
import { useLayoutEffect } from 'react';

function App() {
/*   const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); */
  

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
