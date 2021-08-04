import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataBeats from './dataBeats.json';
import SelectedBeast from './component/SelectedBeast';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      descriptions: '',
      show: false,
      url:''
    };
  }
  getDataFromMain = (mainTitle, mainDis,url) => {
    let state = this.state;
    state.title = mainTitle;
    state.descriptions = mainDis;
    state.url = url;
    state.show = true;
    this.setState(state);
    console.log(this.state.title);
    console.log(this.state.descriptions);
    console.log(this.state.show);
  };
  makeShowFalse = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <Header />
        {this.state.show && (
          <SelectedBeast
            beatsTitle={this.state.title}
            beatsDescriptions={this.state.descriptions}
            beatsUrl={this.state.url}
            beatsUnShow={this.makeShowFalse}
          />
        )}
        <Main data={dataBeats} fromMain={this.getDataFromMain} />
        <Footer />
      </div>
    );
  }
}

export default App;

//fixed main and add eslintrc
