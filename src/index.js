import React from "react";
import ReactDom from "react-dom/client";
import App from "./App"

const Root  = ReactDom.createRoot(document.getElementById('root'))
Root.render(<App/>)