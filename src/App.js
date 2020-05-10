import React, { Component } from "react";
import "./App.css";
import CovidProjectLogo from "./images/CovidProjectLogo.JPG";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return <Navbar />;
  }
}

const ProjectList = () => {
  return <Project />;
};

const Project = () => {
  return (
    <div className="Project">
      <img src={CovidProjectLogo} alt="Covid 19" />
    </div>
  );
};

export default App;
