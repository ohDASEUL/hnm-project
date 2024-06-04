import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  authenticate,
  setAuthenticate,
  searchQuery,
  setSearchQuery,
}) => {
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  const goMainHome = () => {
    navigate("/");
  };
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="navbar-area">
      <div className="logo-login-area">
        <div className="logo-area">
          <img
            src="https://i.namu.wiki/i/ayYKA61pz1lLaG_PaT3AQQCtgd6fXn2SARPuSKp0zsllO7vWa2nK1BXZor6cvq1agjdwlntjGFqqLt85KnnatjJP3QvoYMsr9w_mM4eokzIqHW6KCy7xiXbt6Vi-j0pV4aHkUqcd0H71V-BojF04-w.svg"
            width="61px"
            onClick={goMainHome}
          />
        </div>
        <div className="login-area">
          {/* true 라면 로그인이 되어 있는상태이므로 상품페이지를 보여주고 로그아웃 글자로 바꿔줌*/}
          {authenticate === true ? (
            <div className="login-inner" onClick={() => setAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <div className="login-text">로그아웃</div>
            </div>
          ) : (
            <div className="login-inner" onClick={goLoginPage}>
              <FontAwesomeIcon icon={faUser} />
              <div className="login-text">로그인</div>
            </div>
          )}
        </div>
      </div>
      <div className="menu-serch-area">
        <ul>
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="serch-group">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
