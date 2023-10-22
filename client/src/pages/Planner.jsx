import { Card, Container, Stack} from "@mui/material"
import "../styles/Planner.css"

function DayCard(props) {
    return (
        <Card className="dayCard">
            {props.name}
        </Card>
    );
}

function Planner() {
  return (
    <div>
      <p>Planner</p>
      <Stack className="stack" direction="row" spacing={3}>
        <DayCard name="Sunday"    />
        <DayCard name="Monday"    />
        <DayCard name="Tuesday"   />
        <DayCard name="Wednesday" />
        <DayCard name="Thursday"  />
        <DayCard name="Friday"    />
        <DayCard name="Saturday"  />
      </Stack>
    </div>
  );
}

export default Planner;
