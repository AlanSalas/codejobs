import React from "react";
import { SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";

function Search({ handleSearch }) {
  return (
    <div className="search">
      <div className="search__inputs">
        <div className="search__input">
          <SearchOutlined />
          <input type="text" id="inputDescription" placeholder="Search by technology, company..." />
        </div>
        <div className="search__input">
          <EnvironmentOutlined />
          <input
            type="text"
            id="inputLocation"
            placeholder="Search by city name, zip code, or other location..."
          />
        </div>
        <div className="search__full-time">
          <div className="search__full-time-check">
            <span>Full Time</span>
            <input type="checkbox" id="inputFullTime" defaultChecked={false} />
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
