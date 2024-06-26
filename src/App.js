import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAllPage from './pages/ProductAllPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrviateRoute from './routes/PrviateRoute';

function App() {
  let [authenticate, setAuthenticate] = useState(false); // true면 로그인, false면 비로그인
  useEffect(() => {
    console.log("Aaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAllPage />} />
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrviateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
