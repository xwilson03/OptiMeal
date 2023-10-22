import { Card, Stack} from "@mui/material"
import { State, useState } from "react"
import "../styles/Planner.css"

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
  return (
    <Stack className="plannerStack" direction="row" spacing={3}>
      <DayCard day="Sunday"    />
      <DayCard day="Monday"    />
      <DayCard day="Tuesday"   />
      <DayCard day="Wednesday" />
      <DayCard day="Thursday"  />
      <DayCard day="Friday"    />
      <DayCard day="Saturday"  />
    </Stack>
  );
}

export default Planner;
