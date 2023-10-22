import "../styles/Sidebar.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Stack, Divider, Slider, Typography, Grid } from '@mui/material';

//Renders a sidebar menu with filters for recipes

export default function Sidebar() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  //Updates new selected menu item
  useEffect(() => {
    const path = location.pathname;
    setSelectedItem(path);
  }, [location]);

  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);

  const handleSliderChange = (macro, newValue) => {
    switch (macro) {
      case 'protein':
        setProtein(newValue);
        break;
      case 'carbs':
        setCarbs(newValue);
        break;
      case 'calories':
        setCalories(newValue);
        break;
      case 'fat':
        setFat(newValue);
        break;
      default:
        break;
    }
  };

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
            
        {/* Displays all slider items */}
        <Grid item xs>
          <Typography gutterBottom>Carbs: {carbs} grams/serving</Typography>
          <Slider
              value={carbs}
              onChange={(event, newValue) => handleSliderChange('carbs', newValue)}
              min={10}
              max={100}
              sx={{ textAlign: "left" }}
          />
        </Grid>

        <Grid item xs>
          <Typography gutterBottom>Protein: {protein} grams/serving</Typography>
            <Slider
                value={protein}
                onChange={(event, newValue) => handleSliderChange('protein', newValue)}
                min={10}
                max={100}
                sx={{ textAlign: "left" }}
            />
        </Grid>

        <Grid item xs>
          <Typography gutterBottom>Fat: {fat} grams/serving </Typography>
          <Slider
            value={fat}
            onChange={(event, newValue) => handleSliderChange('fat', newValue)}
            min={10}
            max={100}
            sx={{ textAlign: "left" }} 
          />
        </Grid>

        <Grid item xs>
          <Typography gutterBottom>Calories: {calories} cals/serving</Typography>
            <Slider
                value={calories}
                onChange={(event, newValue) => handleSliderChange('calories', newValue)}
                min={50}
                max={800}
                sx={{ textAlign: "left" }}
            />
         </Grid>
         
          </ul>
        </div>
      </Stack>
    </div>
  );
}