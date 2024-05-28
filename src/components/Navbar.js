import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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
    <div>
      <div>
        <div className="login-btn">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>

      <div className="nav-section">
        <img
          src="https://i.namu.wiki/i/ayYKA61pz1lLaG_PaT3AQQCtgd6fXn2SARPuSKp0zsllO7vWa2nK1BXZor6cvq1agjdwlntjGFqqLt85KnnatjJP3QvoYMsr9w_mM4eokzIqHW6KCy7xiXbt6Vi-j0pV4aHkUqcd0H71V-BojF04-w.svg"
          width="61px"
        />
      </div>

      <div class="menu-area">
        <div class="flex-container">
          <ul className="menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
          <div class="menu-search-area">
            <div className="menu-search">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
