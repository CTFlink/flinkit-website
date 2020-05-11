import React, { Component } from "react";
import "./App.css";
import CovidProjectLogo from "./images/CovidProjectLogo.JPG";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import flinkitlogo from "./images/flinkitLogo.svg";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <flinkitlogo />
      </div>
    );
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
