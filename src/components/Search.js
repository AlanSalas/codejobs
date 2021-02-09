import React from "react";
import { SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";

function Search() {
  return (
    <div className="search">
      <div className="search__inputs">
        <div className="search__input">
          <SearchOutlined />
          <input type="text" placeholder="Search by technology, title, expertise..." />
        </div>
        <div className="search__input">
          <EnvironmentOutlined />
          <input type="text" placeholder="Search by country" />
        </div>
        <div className="search__full-time">
          <div className="search__full-time-check">
            <span>Full Time</span>
            <input type="checkbox" />
          </div>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
