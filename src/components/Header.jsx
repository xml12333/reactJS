import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({ searchInfo, setEndpoint }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") return;
    setEndpoint(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`
    );
  };
  return (
    <header>
      <div className="container">
        <h1>Wiki Search</h1>
        <div className="link">
          <Link to="/about">about</Link>
        </div>
      </div>
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="What are you looking for?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {searchInfo.totalhits ? (
        <p>Search Results: {searchInfo.totalhits}</p>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
