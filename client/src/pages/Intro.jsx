import "../styles/intro.css";
import "../styles/App.css";
import {Link} from 'react-router-dom';


function Intro() {
  return (
    <div className="Intro">
        <div className="content_div">
          <h1 className="optimeal_text">OptiMeal</h1>
          <div className="planner_div">
            <h2 className="planner_text">Your personalized meal planner.</h2>
          </div>
      {/* <div className="get_started"> */}
        <Link to="/Planner">
          <button  className="get_started_button">Get Started</button>
        </Link>
        </div>
    </div>
  );
}

export default Intro;
