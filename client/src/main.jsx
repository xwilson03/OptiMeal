import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro     from "./pages/Intro";
import Browse    from "./pages/Browse";
import Groceries from "./pages/Groceries";
import NoPage    from "./pages/NoPage";
import Planner   from "./pages/Planner";

import App from './App'

const domRootNode = document.getElementById("root");
const root = createRoot(domRootNode);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/"         element={<App />}>
                <Route index            element={<Intro     />} />
                <Route path="planner"   element={<Planner   />} />
                <Route path="browse"    element={<Browse    />} />
                <Route path="groceries" element={<Groceries />} />
                <Route path="*"         element={<NoPage    />} />
            </Route>
        </Routes>
    </BrowserRouter>
);