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

                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Docs" aria-label="search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default NavBar;