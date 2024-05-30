import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
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
  return (
    <div className="navbar-area">
      <div className="logo-login-area">
        <div className="logo-area">
          <img
            src="https://i.namu.wiki/i/ayYKA61pz1lLaG_PaT3AQQCtgd6fXn2SARPuSKp0zsllO7vWa2nK1BXZor6cvq1agjdwlntjGFqqLt85KnnatjJP3QvoYMsr9w_mM4eokzIqHW6KCy7xiXbt6Vi-j0pV4aHkUqcd0H71V-BojF04-w.svg"
            width="61px"
          />
        </div>
        <div className="login-area">
          <FontAwesomeIcon icon={faUser} />
          <span>로그인</span>
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
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
