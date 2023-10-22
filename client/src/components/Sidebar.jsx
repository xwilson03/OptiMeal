import "../styles/Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

//Renders a sidebar menu with filters for recipes

export default function Sidebar() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  //Updates new selected menu item
  useEffect(() => {
    const path = location.pathname;
    setSelectedItem(path);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
        <h2 className="sidebarMainTitle">Filters</h2>
          <h3 className="sidebarTitle">Cuisine</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              American
            </li>
            <li className="sidebarListItem">
              Italian
            </li>
            <li className="sidebarListItem">
              Indian
            </li>
            <li className="sidebarListItem">
              Asian
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Diet</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    Vegan
                </li>
                <li className="sidebarListItem">
                    Vegetarian
                </li>
                
                <li className="sidebarListItem">
                    Pescatarian
                </li>
            
                <li className="sidebarListItem">
                    Keto
                </li>
            </ul>
          <h3 className="sidebarTitle">Macros</h3>
        </div>
      </div>
    </div>
  );
}