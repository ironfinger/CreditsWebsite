import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainTitle from './components/MainTitle';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  
  renderData() {
    return(this.state.data);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainTitle className="AppTitle" />
      </div>
    );
  }
}

export default App;
