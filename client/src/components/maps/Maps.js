import React, { Component } from 'react';
import Navbar from '../Navbar';
import MapsForm from '../../containers/maps/MapsForm';
import MapsList from '../../containers/maps/MapsList';
import './Maps.css'

export default class Maps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTitle: ''
        }
    }

    onSearchTitle = (event) => {
        this.setState({
            searchTitle: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container my-md-4">
                    <MapsForm />
                    <h3 className="mt-4">Search</h3>
                    <hr />
                    <form className="row mb-3" onChange={this.handleSearch}>
                        <div className="col-sm-3 d-flex">
                            <label className="col-form-label mr-2">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="title..."
                                aria-label="Title"
                                name="title"
                                value={this.state.searchTitle}
                                onChange={this.onSearchTitle} />
                        </div>
                    </form>
                    <MapsList 
                        searchTitle={this.state.searchTitle}
                    />
                </div>
            </div>
        )
    }
}