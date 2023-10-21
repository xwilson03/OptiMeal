import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <p>Yippee :D</p>
      <Outlet/>
    </div>
  );
}

export default App;
