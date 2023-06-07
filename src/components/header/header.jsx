import React from "react";
import menuIcon from "../../images/menuIcon.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="icon-box">
          <img src={menuIcon} alt="menuIcon" className="menu-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
