import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./DeskApp/App";
import Route from "./DeskApp/routes/Route";
import Appli from "./DeskApp/routes/Home";

ReactDOM.render(
  <div className="grid grid-cols-5 grid-rows-5   h-screen">
    <div className="col-span-1 row-span-5 h-screen">
      <Appli />
    </div>
    <div className="col-span-4 row-span-5 h-screen">
      <Route />
    </div>
  </div>,
  document.getElementById("index")
);
