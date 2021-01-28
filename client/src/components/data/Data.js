import React, { Component } from 'react';
import Navbar from '../Navbar';
import DataForm from '../../containers/data/DataForm';
import DataSearch from '../../containers/data/DataSearch';
import DataList from '../../containers/data/DataList';
import './Data.css'

export default class Data extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchLetter: '',
            searchFrequency: ''
        }
    }

    onSearchLetter = (event) => {
        this.setState({
            searchLetter: event.target.value
        })
    }

    onSearchFrequency = (event) => {
        this.setState({
            searchFrequency: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container my-md-4">
                    <DataForm />
                    <h3 className="mt-4">Search</h3>
                    <hr />
                    <DataSearch 
                        onSearchLetter={this.onSearchLetter} 
                        onSearchFrequency={this.onSearchFrequency}
                        searchLetter = {this.state.searchLetter}
                        searchFrequency = {this.state.searchFrequency}
                    />
                    <DataList 
                        searchLetter = {this.state.searchLetter}
                        searchFrequency = {this.state.searchFrequency}
                    />
                </div>
            </div>
        )
    }
}