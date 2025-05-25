import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import './typography.css';
import HomePage from './assets/pages/home/HomePage';
import IndexLogin from './assets/pages/login/index';
import IndexRegister from './assets/pages/register/index';
import IndexProfile from './assets/pages/profile/index';
import IndexKategori from './assets/pages/produk/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<IndexLogin />} />
        <Route path="/register" element={<IndexRegister />} />
        <Route path="/profile" element={<IndexProfile />} />
        <Route path="/kategori" element={<IndexKategori />} />
      </Routes>
    </Router>
  );
}

export default App;