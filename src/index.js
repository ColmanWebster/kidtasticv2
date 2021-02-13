import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  alert("you're in dev mode!");
}
ReactDOM.render(<App />, document.getElementById("root"));
