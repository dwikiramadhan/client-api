import React, { Component } from 'react';
import { updateMaps, deleteMaps } from '../../actions/maps';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

class MapsItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title || '',
            lat: this.props.lat || '',
            lang: this.props.lang || '',
            isEdit: false,
        }
        this.editBtnClicked = this.editBtnClicked.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    editBtnClicked() {
        this.setState({
            isEdit: true
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleUpdate() {
        this.props.updateMaps(this.props.id, this.state.title, this.state.lat, this.state.lang)
        this.setState({
            isEdit: false
        })
    }

    handleDelete() {
        Swal.fire({
            title: 'Are you sure?',
            text: "Anda tidak akan dapat mengembalikan ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteMaps(this.props.id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    render() {
        if (this.state.isEdit) {
            return (
                <tr>
                    <th scope="row">{this.props.no}</th>
                    <td>
                        <input type="text" value={this.state.title} onChange={this.handleInputChange} name="title" className="form-control" />
                    </td>
                    <td>
                        <input type="text" value={this.state.lat} onChange={this.handleInputChange} name="lat" className="form-control" />
                    </td>
                    <td>
                        <input type="text" value={this.state.lang} onChange={this.handleInputChange} name="lang" className="form-control" />
                    </td>

                    <td>
                        <button onClick={this.handleUpdate} className={"btn btn-success mr-2 "}><i className="fa fa-save"></i> save</button>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <th scope="row">{this.props.no}</th>
                    <td>{this.state.title}</td>
                    <td>{this.state.lat}</td>
                    <td>{this.state.lang}</td>
                    <td>
                        <button onClick={this.editBtnClicked} className="btn btn-success mr-2 "><i className="fa fa-edit"></i> update </button>
                        <button onClick={this.handleDelete} className="btn btn-danger"><i className="fa fa-trash"></i> delete</button>
                    </td>
                </tr>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateMaps: (id, title, lat, lang) => dispatch(updateMaps(id, title, lat, lang)),
    deleteMaps: (id) => dispatch(deleteMaps(id))
})

export default connect(
    null,
    mapDispatchToProps
)(MapsItem)