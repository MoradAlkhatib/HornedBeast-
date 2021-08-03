import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import dataBeats from "./dataBeats.json";

class Main extends Component {
  render() {
    return (
      <div className="main">
        {arr.map((element) => {
          return (
            <HornedBeasts best={element} key={element.title} className="card" />
          );
        })}
      </div>
    );
  }
}

let arr = dataBeats;
export default Main;
