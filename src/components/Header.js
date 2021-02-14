import React from "react";
import useTheme from "../hooks/useTheme";
import Search from "./Search";
import { HeartFilled } from "@ant-design/icons";

function Header({ showSearch, handleSearch }) {
  const { handleToggle, theme } = useTheme();

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <h1>&lt; CodeJobs /&gt;</h1>
        </div>
        <div className="header__copy">
          <h2>Find your dream job!</h2>
        </div>
        <div className="header__actions">
          <span>
            Made with <HeartFilled style={{ color: "red" }} /> by <a href="#">Alan Salas</a>
          </span>
          <button title="Switch Theme" className="toggle" onClick={handleToggle}>
            {theme === "dark" ? "🌝" : "🌚"}
          </button>
        </div>
        {showSearch && <Search handleSearch={handleSearch} />}
      </div>
    </div>
  );
}

export default Header;
