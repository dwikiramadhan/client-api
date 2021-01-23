import React, { Component } from 'react';
import DataItem from './DataItem';
import { connect } from 'react-redux';
import { loadData } from '../actions';

class DataList extends Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        const dataNode = this.props.data.map((item, index) => <DataItem 
            key={item.id}
            id={index+1}
            letter={item.letter}
            frequency={item.frequency}
            sent={item.sent}
        />)
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Letter</th>
                        <th scope="col">Frequency</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataNode}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.datas
})

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataList)