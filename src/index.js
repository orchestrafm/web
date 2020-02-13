import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulmaswatch/cyborg/bulmaswatch.min.css';

import NavBar from "./components/navbar"
import Home from "./pages/home"
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";

class Main extends Component {
    render() {
        window.__react_toast_provider = React.createRef();
        return (
            <Router>
                <div className="App">
                    <Helmet>
                        <style>
                        {
                            'html, body, #background { background-color: #242424;}'
                        }
                        </style>
                    </Helmet>
                    <NavBar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </div>
            </Router>
            <ToastProvider ref={window.__react_toast_provider}>
                <Router>
                    <div className="App">
                        <Helmet>
                            <style>
                            {
                                `
                                .Main {
                                    display: flex;
                                    min-height: 100vh;
                                    flex-direction: column;
                                }

                                .Main-Loop {
                                    flex: 1;
                                }

                                    background-color: #242424;
                                    background-image: url(./squares.png);
                                }

                                /* Copied from https://github.com/jgthms/bulma/pull/1596#issuecomment-556416927 */
                                /* Remove if horizontal cards get merged */
                                .card.is-horizontal {
                                    flex-direction: row;
                                    display: flex;
                                    flex-basis: 50ex;
                                    flex-grow: 0;
                                    flex-shrink: 1;
                                    box-shadow: none;
                                }

                                .card.is-horizontal .card-image {
                                    align-self: center;
                                }

                                .card.is-horizontal .image {
                                    min-height: 100%;
                                }

                                .card.is-horizontal .card-content {
                                    flex: 1;
                                }

                                .card.is-horizontal .card-content {
                                    padding-left: 1em;
                                    padding-top: 0;
                                    padding-bottom: 0;
                                    font-size: 0.8em;
                                }

                                .card.is-horizontal {
                                    ul {
                                        list-style: none;
                                        margin: 0;
                                    }

                                    .is-divider {
                                        margin-top: 1.5rem;
                                        margin-bottom: 1rem;
                                    }
                                }
                                `
                            }
                            </style>
                        </Helmet>
                        <NavBar/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </ToastProvider>
        )
    }
}

export default Main;
ReactDOM.render(<Main />, document.getElementById('root'))
