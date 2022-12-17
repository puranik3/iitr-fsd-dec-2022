import React, { Component } from "react";

import { Link } from "react-router-dom";

import AuthenticationService from "./AuthenticationService.js";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {isUserLoggedIn && (
                            <li>
                                <Link className="nav-link" to="/todos">
                                    Todos
                                </Link>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && (
                            <li>
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                        {isUserLoggedIn && (
                            <li>
                                <span
                                    className="nav-link"
                                    style={{cursor: 'pointer'}}
                                    onClick={() => {
                                        AuthenticationService.logout();
                                        this.props.navigate( '/' );
                                    }}
                                >
                                    Logout
                                </span>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;
