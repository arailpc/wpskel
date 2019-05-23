import React from "react";
import { render } from "react-dom";
import { config } from "./modules/config";
// import "./modules/header.component";
import App from "./App";
import "./css/styles.css";
import "./scss/style.scss";

render(<App />, document.getElementById("app"));

console.log(config);
