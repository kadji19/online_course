import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
          <Routes>
            <Route path='/*' element={<Layout/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
