import "../styles/Intro.css";
import "../styles/App.css";
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';



function Intro() {
  return (
    <Container className="intro">
      <h1 className="introTitle">OptiMeal</h1>
      <h2 className="introSubtitle">Your personalized meal planner.</h2>
      <div className="getStartedButton">
        <Link to="/Planner">
          <button>Get Started</button>
        </Link>
      </div>
    </Container>
  );
}

export default Intro;
