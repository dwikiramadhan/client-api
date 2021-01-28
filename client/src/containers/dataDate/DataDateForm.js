import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDataDate } from '../../actions/dataDates'

class DataDateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisibleAdd: 'card d-none',
            letter: '',
            frequency: ''
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
        if (this.state.letter && this.state.frequency) {
            this.props.addDataDate(this.state.letter, this.state.frequency)
            this.setState({ letter: '', frequency: '' })
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
                                <label className="col-form-label mr-2">Letter</label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    aria-label="Letter"
                                    name="letter"
                                    value={this.state.letter}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="col-sm-4 d-flex">
                                <label className="col-form-label mr-2">Frequency</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="0.0000" 
                                    aria-label="Frequency"
                                    name="frequency"
                                    value={this.state.frequency}
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
    addDataDate: (letter, frequency) => dispatch(addDataDate(letter, frequency)),
})

export default connect(
    null,
    mapDispatchToProps
)(DataDateForm)