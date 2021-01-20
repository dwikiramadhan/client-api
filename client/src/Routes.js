import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import history from "./history"

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        )
    }
}