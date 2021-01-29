import React, { Component } from 'react';
import './Home.css'

import Navbar from '../Navbar';

const email = localStorage.getItem('email');

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="alert alert-primary" role="alert">
                    Welcome, <b>{email ? email : ''}</b>
                </div>
            </div>
        )
    }
}