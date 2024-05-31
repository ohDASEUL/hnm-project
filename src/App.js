
/*
1. 전체 상품 페이지, 로그인, 상품 상세 페이지(완료)
1-1 메뉴 만들기(완료)
2. 전체 상품 페이지 : 전체 상품 볼 수 있음(완료)
3. 로그인 페이지 : 로그인 버튼 클릭 시(완료)
4. 상품을 눌렀으나 로그인이 안 된 경우 로그인 페이지가 나오고
      로그인이 된 경우 상품 상세 페이지가 나옴
5. 로그아웃 버튼 클릭 시 로그아웃
6. 로그아웃이 되면 상품 상세 페이지 볼 수 없고, 다시 로그인 해야 보임
7. 로그인 하면 로그아웃 문구가 보이고, 로그아웃하면 로그인 문구가 보임
8. 상품 검색 가능
*/

import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAllPage from './pages/ProductAllPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false) // true면 로그인, fals면 비로그인
  return (
    <div >
     <Navbar/>
     <Routes>
      <Route path="/" element={<ProductAllPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/product/:id" element={<ProductDetailPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
