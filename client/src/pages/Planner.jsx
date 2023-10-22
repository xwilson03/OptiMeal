import { Card, Stack} from "@mui/material"
import "../styles/Planner.css"

function DayCard(props) {
    return (
        <Card className="dayCard">
            <h1 class="dayName">{props.name}</h1>
        </Card>
    );
}

function Planner() {
  return (
    <Stack direction="row" spacing={3}>
      <DayCard name="Sunday"    />
      <DayCard name="Monday"    />
      <DayCard name="Tuesday"   />
      <DayCard name="Wednesday" />
      <DayCard name="Thursday"  />
      <DayCard name="Friday"    />
      <DayCard name="Saturday"  />
    </Stack>
  );
}

export default Planner;
