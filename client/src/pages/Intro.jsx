import "../styles/Intro.css";
import "../styles/App.css";
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';


function Intro() {
  return (
    <Container className="intro">
      <h1>OptiMeal</h1>
      <h2>Your personalized meal planner.</h2>
      <Link to="/Planner">
        <button className="get_started_button">Get Started</button>
      </Link>
    </Container>
  );
}

export default Intro;
