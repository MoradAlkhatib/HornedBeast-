import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from '../dataBeats.json';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      descriptions: '',
      url: '',
    };
  }

  getHorned = (titleBeast, disBeast, url) => {
    let state = this.state;
    state.title = titleBeast;
    state.descriptions = disBeast;
    state.url = url;
    this.setState(state);
    this.props.fromMain(titleBeast, disBeast, url);
  };

  render() {
    return (
      <div className='main'>
        {this.props.numberHorn === 0
          ? data.map((element) => {
            return (
              <HornedBeasts
                best={element}
                key={element.title}
                className='card'
                fromChild={this.getHorned}
              />
            );
          })
          : data.map((element) => {
            return (
              element.horns === this.props.numberHorn && (
                <HornedBeasts
                  best={element}
                  key={element.title}
                  className='card'
                  fromChild={this.getHorned}
                />
              )
            );
          })}
      </div>
    );
  }
}

export default Main;
