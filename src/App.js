import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAllPage from './pages/ProductAllPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  let [authenticate, setAuthenticate] = useState(false); // true면 로그인, false면 비로그인

  useEffect(() => {
    console.log("Aaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAllPage />} />
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
