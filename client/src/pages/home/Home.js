import React, { Component } from 'react';
import './Home.css'

import Navbar from '../../components/Navbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="alert alert-primary" role="alert">
                    A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
            </div>
        )
    }
}