import React, { Component } from 'react';
import './Home.css'

import Navbar from '../Navbar';
import auth from '../../auth';

export default class Home extends Component {
    componentDidMount() {
        auth()
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="alert alert-primary" role="alert">
                    Welcome, <b>{auth().email}</b>
                </div>
            </div>
        )
    }
}