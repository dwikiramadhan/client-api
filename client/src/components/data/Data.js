import React, { Component } from 'react';
import Navbar from '../Navbar';
import DataForm from '../../containers/DataForm';
import DataSearch from '../../containers/DataSearch';
import DataList from '../../containers/DataList';
import './Data.css'

export default class Data extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container my-md-4">
                    <DataForm />
                    <h3 className="mt-4">Search</h3>
                    <hr />
                    <DataSearch />
                    <DataList />
                </div>
            </div>
        )
    }
}