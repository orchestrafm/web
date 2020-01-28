import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <div className="navbar-start">
                            Home
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}
