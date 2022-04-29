import React from "react";
import logo from "../../assets/images/logo.png";
import "./Nav.css";
import "../Cards/Card.js";
import "../../translations/i18n.js";
import i18n from "i18next";

const Nav = ({ onLanguageChange }) => {
  const handleOnclick = (lang) => {
    i18n.changeLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <div className="container">
      <a href="https://www.sharefoundation.info/sr/o-nama/">
        <img src={logo} width="240" alt="Logo" />
      </a>
      <div className="lang-links">
        <button className="lang-link" onClick={() => handleOnclick("sr")}>
          sr
        </button>
        <button className="lang-link" onClick={() => handleOnclick("en")}>
          en
        </button>
      </div>
    </div>
  );
};

export default Nav;
