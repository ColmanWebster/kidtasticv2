import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   alert("you're in dev mode!");
// }
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);



