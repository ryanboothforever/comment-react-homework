//Imports all components from other parts of app, as well as 'reactDOM' which will help actually render the components to the client to see.
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Begining of the render, where every component gets put into.
ReactDOM.render(
  // strict mode makes sure the components layed within the tags are following recommended practices for React and warns you in the console if they are not.
  <React.StrictMode>
    {/* The entire app lives within this app components, shuffled around from one component to another */}
    <App />
  </React.StrictMode>,
  // Here we choose where our component will be rendered to, in this case the div with an id 'root' in the index.html
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
