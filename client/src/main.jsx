import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const domRootNode = document.getElementById("root");
const root = createRoot(domRootNode);

root.render(<App/>);