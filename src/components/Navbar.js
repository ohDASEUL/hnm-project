import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  authenticate,
  setAuthenticate
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
  const search=(e)=>{
    if(e.key === "Enter"){
      let keyword = e.target.value
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div className="navbar-area">
      <div className="logo-login-area">
        <div className="logo-area">
          <img
            src="https://th.bing.com/th?id=OIP.wUJyxgcA74djs_P1u8fJbwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
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
            onKeyPress={(e)=>search(e)}
            
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
