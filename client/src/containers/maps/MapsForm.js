import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMaps } from '../../actions/maps'

class MapsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisibleAdd: 'card d-none',
            title: '',
            lat: '',
            lang: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickSave = this.handleClickSave.bind(this)
    }

    handleClickAdd() {
        this.setState({
            isVisibleAdd: 'card'
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleClickSave(event) {
        if (this.state.title && this.state.lat && this.state.lang) {
            this.props.addMaps(this.state.title, this.state.lat, this.state.lang)
            this.setState({ title: '', lat: '', lang: '' })
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClickAdd()} className="btn btn-info mb-3 "><i className="fa fa-plus"></i> add</button>
                <div className={this.state.isVisibleAdd}>
                    <div className="card-body bg-light">
                        <form onSubmit={this.handleClickSave} className="row mb-3">
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
                            <div className="col-sm-4 d-flex">
                                <label className="col-form-label mr-2">Lattitude</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="0.0000" 
                                    aria-label="Lattitude"
                                    name="lat"
                                    value={this.state.lat}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="col-sm-4 d-flex">
                                <label className="col-form-label mr-2">Longitude</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="0.0000" 
                                    aria-label="Longitude"
                                    name="lang"
                                    value={this.state.lang}
                                    onChange={this.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-outline-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addMaps: (title, lat, lang) => dispatch(addMaps(title, lat, lang)),
})

export default connect(
    null,
    mapDispatchToProps
)(MapsForm)