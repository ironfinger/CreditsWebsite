import React, { Component } from 'react';

import './../App.css';
import logo from './../assets/Credits.svg'

class MainTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <div class="MainTitle">
                <h1 className="Title">Credits</h1>
                <img src={logo} className="App-logo" alt="logo:" />
                <p className="ShittyStatement">Next Layer of the internet</p>
            </div>
        );
    }
}

export default MainTitle; 