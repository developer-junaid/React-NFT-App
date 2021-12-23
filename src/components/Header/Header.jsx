import React from "react";

// Styles
import "./header.css";

// Images
import punkLogo from "../../assets/header/cryptopunk-logo.png";
import searchIcon from "../../assets/header/search.png";
import themeSwitchIcon from "../../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={punkLogo} alt="punk" className="punk-logo" />
      </div>

      <div className="search-bar">
        <div className="search-icon-container">
          <img src={searchIcon} alt="search icon" />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="header-items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header-actions">
        <div className="theme-switch-container">
          <img src={themeSwitchIcon} alt="theme switch icon" />
        </div>
      </div>

      <div className="login-button">GET IN</div>
    </div>
  );
};

export default Header;
