import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import './typography.css';
import HomePage from './assets/pages/home/HomePage';
import IndexLogin from './assets/pages/login/index';
import IndexRegister from './assets/pages/register/index';
import Index from './assets/pages/profile/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<IndexLogin />} />
        <Route path="/register" element={<IndexRegister />} />
        <Route path="/profile" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;