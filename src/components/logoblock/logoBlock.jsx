import React from "react";
import logo from "../../images/logo.svg";
import "./logoBlock.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LogoBlock = () => {
  return (
    <div className="logo-block">
      <img src={logo} alt="logo" className="logo" />
      <div className="logo-text">Справочная аптек</div>
      <div className="city-filter">
        Искать товары:{" "}
        <span className="city">
          По всему узбекистану{" "}
          {<KeyboardArrowDownIcon className="arrow-down" />}
        </span>
      </div>
    </div>
  );
};

export default LogoBlock;
