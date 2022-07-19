import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import "./index.css";
import "./style.scss";
import styled,{createGlobalStyle} from "styled-components";

// const Global = createGlobalStyle{
//   *{
//      margin
//   }
// }



function App() {
  return <Shop />;
}

render(<App />, document.querySelector("#root"));
