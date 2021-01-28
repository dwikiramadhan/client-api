import React, { Component } from 'react';
import Navbar from '../Navbar';
import DataDateForm from '../../containers/dataDate/DataDateForm';
import DataDateList from '../../containers/dataDate/DataDateList';
import './DataDate.css'

export default class DataDate extends Component {
    constructor(props) {
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
                    <div className="container my-md-4">
                        <DataDateForm />
                        <h3 className="mt-4">Search</h3>
                        <hr />
                        <form className="row mb-3">
                            <div className="col-sm-3 d-flex">
                                <label className="col-form-label mr-2">Letter</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="A"
                                    aria-label="Letter"
                                    name="letter"
                                    value={this.state.searchLetter}
                                    onChange={this.onSearchLetter} />
                            </div>
                            <div className="col-sm-4 d-flex">
                                <label className="col-form-label mr-2">Frequency</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0.0000"
                                    aria-label="Frequency"
                                    name="frequency"
                                    value={this.state.searchfrequency}
                                    onChange={this.onSearchFrequency} />
                            </div>
                        </form>
                        <DataDateList
                            searchLetter={this.state.searchLetter}
                            searchFrequency={this.state.searchFrequency}
                        />
                    </div>
                </div>
            </div>
        )
    }
}