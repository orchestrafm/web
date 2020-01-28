import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulmaswatch/cyborg/bulmaswatch.min.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar is-danger is-active" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">
                            Home
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}
