import "../styles/App.css";
import Sidebar from "../components/Sidebar.jsx";
import Search from "../components/Search.jsx";
import { Stack } from '@mui/material';

function Browse() {

  return (
    <div className="Browse">
      <Stack direction="row">
       <Sidebar/>
        <Search/>
      </Stack>
    </div>
  );
};

export default Browse;
