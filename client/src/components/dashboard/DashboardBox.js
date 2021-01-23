import React, { Component } from 'react'
import DashboardItem from './DashboardItem'

export default class DashboardBox extends Component {
    render() {
        return (
            <div className="container">
                <div className="card border-primary mb-3">
                    <div className="card-header bg-primary text-white"><b><i className="fa fa-bookmark"></i> Welcome to Dashboard</b></div>
                    <div className="card-body text-primary">
                        <DashboardItem />
                    </div>
                </div>
            </div>
        )
    }
}