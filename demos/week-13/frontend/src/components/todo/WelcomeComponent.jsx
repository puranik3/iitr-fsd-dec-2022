import React, { Component } from "react";

import { Link } from "react-router-dom";

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}. Click to manage your todos{" "}
                    <Link to="/todos">here</Link>.
                </div>
            </>
        );
    }
}

export default WelcomeComponent;
