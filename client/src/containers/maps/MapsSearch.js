import React, { Component } from 'react';

export default class MapsSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleSearch(){

    }

    render() {
        return (
            <form className="row mb-3" onChange={this.handleSearch}>
                <div className="col-sm-3 d-flex">
                    <label className="col-form-label mr-2">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="title..."
                        aria-label="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange} />
                </div>
            </form>
        )
    }
}