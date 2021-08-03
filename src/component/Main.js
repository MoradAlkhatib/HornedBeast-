import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      descriptions: '',
      show: true,
    };
  }

  getHorned = (titleBeast, disBeast, show) => {
    let state = this.state;
    state.title = titleBeast;
    state.descriptions = disBeast;
    state.show = this.state.show;
    this.setState(state);
    console.log(this.state.title);
    console.log(this.state.descriptions);
    console.log(this.state.show);
    this.props.fromMain(titleBeast, disBeast, show);
  };

  render() {
    return (
      <div className='main'>
        {this.props.data.map((element) => {
          return (
            <HornedBeasts
              best={element}
              key={element.title}
              className='card'
              fromChild={this.getHorned}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
