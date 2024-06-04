import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAllPage from './pages/ProductAllPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrviateRoute from './routes/PrviateRoute';

function App() {
  let [authenticate, setAuthenticate] = useState(false); // true면 로그인, false면 비로그인
  let [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
  useEffect(() => {
    console.log("Aaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<ProductAllPage searchQuery={searchQuery}/>} />
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrviateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
