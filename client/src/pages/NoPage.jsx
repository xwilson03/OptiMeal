import "../styles/App.css";
import error_img from "../assets/hungry_mane.png";

const h1Styling = {
  color:'white'
}

function NoPage() {
  return (
    <div className="NoPage">
      <h1 style={h1Styling}>404</h1>
      <img id="error_image" src={error_img} alt="error_image" style={{height:'10%',width:'20%'}}/>
      <h1 style={h1Styling}>Uh Oh! That Page Doesn't Exist!</h1>
    </div>
  );
}

export default NoPage;
