import "../styles/App.css";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import SearchIcon from "@mui/icons-material/Search";

function Browse() {

  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  // Function to handle changes in the search input
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle the search action (you can customize this part)
  const handleSearch = () => {
    // Perform your search logic with the `searchTerm` here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="Browse">
      <div className="search-container">
        <input className="inputContainer" type="text" placeholder="Search for recipes..." value={searchTerm} onChange={handleSearchInputChange}/>
        <button className = "searchButton" onClick={handleSearch}>
         <SearchIcon/>
        </button>
      </div>
      <Sidebar/>
    </div>
  );
}

export default Browse;
