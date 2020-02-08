import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulmaswatch/cyborg/bulmaswatch.min.css';

import NavBar from "./components/navbar"
import Home from "./pages/home"

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
        )
    }
}

export default Main;
ReactDOM.render(<Main />, document.getElementById('root'))
