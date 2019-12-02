import React from "react";
import ReactDOM from "react-dom";
//import { Head } from "./Head";
//import { Preview } from './Preview';
//import { Post } from "./Post";
import { Display } from "./Display";

import "./styles.css";

function App() {
  ///let id = 0;

  return <Display />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
