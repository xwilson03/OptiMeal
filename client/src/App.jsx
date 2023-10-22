import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="outletContainer">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
