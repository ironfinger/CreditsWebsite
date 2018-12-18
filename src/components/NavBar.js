import React from 'react';
import Logo from './../assets/Credits.svg';
import './../App.css';

class NavBar extends React.Component {
    render() {
        return(
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src={Logo} width="30" height="30" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto items">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Wallet</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Exchange</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Docs</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Tutorial</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;