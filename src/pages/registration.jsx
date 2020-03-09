import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulmaswatch/cyborg/bulmaswatch.min.css';

import './css/register-login.css';

class Registration extends React.Component {
    render() {

        return(
            <div className="mainComponent">
                <h1 className="header">Registration</h1>

                <div className="field">
                    <label className="label">Username</label>
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

                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                        <input className="input" type="password"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Invite Code</label>
                    <div className="control">
                        <input className="input" type="text"/>
                    </div>
                </div>
                
                <button className="button is-danger is-active">Register</button>

            </div>
        )
    }
}

export default Registration;