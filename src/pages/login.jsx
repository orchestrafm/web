import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulmaswatch/cyborg/bulmaswatch.min.css';

class Login extends React.Component {
    render() {
        return (
            <div className="mainComponent">
                <h1 className="header">Login</h1>

                <div className="field">
                    <label className="label">Username or Email</label>
                    <div className="control">
                        <input className="input" type="text"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password"/>
                    </div>
                </div>

                <button className="button is-danger is-active">Login</button>

                <a href="#">Forgot Password</a>
            </div>
        )
    }
}

export default Login;