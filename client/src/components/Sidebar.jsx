import "../styles/Sidebar.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Stack, Divider, Checkbox } from '@mui/material';

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
      <h2 className="sidebarMainTitle">Filters</h2>
      <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
        <div>
          <h3 className="sidebarTitle">Cuisine</h3>
          <ul className="sidebarList">
            <li> <input type="checkbox"/> American </li>
            <li> <input type="checkbox"/> Italian </li>
            <li> <input type="checkbox"/> Indian </li>
            <li> <input type="checkbox"/> Asian </li>
          </ul>
        </div>
        <div>
          <h3 className="sidebarTitle">Diet</h3>
          <ul className="sidebarList">
           <li> <input type="checkbox"/> Vegan       </li>
           <li> <input type="checkbox"/> Vegetarian  </li>
           <li> <input type="checkbox"/> Pescatarian </li>
           <li> <input type="checkbox"/> Keto        </li>
          </ul>
        </div>
        <div>
          <h3 className="sidebarTitle">Macros</h3>
          <ul className="sidebarList">
           <li> <input type="checkbox"/> Carbs    </li>
           <li> <input type="checkbox"/> Protein  </li>
           <li> <input type="checkbox"/> Fat      </li>
           <li> <input type="checkbox"/> Calories </li>
          </ul>
        </div>
      </Stack>
    </div>
  );
}