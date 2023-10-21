import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <p>Yippee :D</p>
      <Outlet/>
    </div>
  );
}

export default App;
