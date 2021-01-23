import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Data from "./components/data/Data";
import history from "./history"

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/data" component={Data} />
                </Switch>
            </Router>
        )
    }
}