import { Box, Card, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import "../styles/Planner.css";
import HashLoader from "react-spinners/HashLoader";
import axios from 'axios';

const defaultMeals = {"breakfast": "default-breakfast",
                      "lunch":     "default-lunch",
                      "dinner":    "default-dinner"};

function DayCard(props) {

    const [meals, setMeals] = useState(defaultMeals);
    

    return (
        <Card className="dayCard">
          <h1> {props.day} </h1>

          <Card className="mealCard">
            <h3> Breakfast:        </h3>
            <h2> {meals.breakfast} </h2>
          </Card>

          <Card className="mealCard">
            <h3> Lunch:        </h3>
            <h2> {meals.lunch} </h2>
          </Card>

          <Card className="mealCard">
            <h3> Dinner:        </h3>
            <h2> {meals.dinner} </h2>
          </Card>

        </Card>
    );
}

function Planner() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000);
  },[]);

  useEffect(() => {
      (async () => {
        const cardData = await axios.get("https://api.spoontacular.com/mealplanner/generate")
          .then( (res) => {
            
          return res.data;
          })
          .catch((err)=>{
            
            console.log("Error! Response failed to load:(");
          })
          
          
          ;
      })();
    
      return () => {};
    }, []);

  return (
    loading ? 
            <div className="loader-container">
            <HashLoader 
              color={"#317196"}
              loading={loading}
              size={200}>
              </HashLoader> 
            </div>
            :
    <>
        <Box className="planner">
            <Stack direction="row" spacing={3}>
                <DayCard day="Sunday"    />
                <DayCard day="Monday"    />
                <DayCard day="Tuesday"   />
                <DayCard day="Wednesday" />
                <DayCard day="Thursday"  />
                <DayCard day="Friday"    />
                <DayCard day="Saturday"  />
            </Stack>
        </Box>
        <button className="generateSchedule">Generate Schedule</button>
    </>
  );
}

export default Planner;