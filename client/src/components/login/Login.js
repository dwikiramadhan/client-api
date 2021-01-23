import React, { Component } from 'react';
import LoginBox from '../../containers/LoginBox';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <LoginBox />
                    </div>
                </div>
            </div>
        )
    }
}