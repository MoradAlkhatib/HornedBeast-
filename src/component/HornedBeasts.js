import React, { Component } from "react";

class HornedBeasts extends Component {
  render() {
    return (
      <div className="counter">
        <h2>{this.props.best.title}</h2>
        <img src={this.props.best.image_url} alt="" title="" />
        <p>{this.props.best.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
