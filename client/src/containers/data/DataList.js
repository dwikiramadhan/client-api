import React, { Component } from 'react';
import DataItem from './DataItem';
import { connect } from 'react-redux';
import { loadData } from '../../actions/datas';

class DataList extends Component {

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        let dataFiltered = this.props.data;
        if (this.props.searchLetter && this.props.searchFrequency) {
            dataFiltered = this.props.data.filter(item =>
                item.letter.toLowerCase() === this.props.searchLetter.toLowerCase() && Number(item.frequency) === Number(this.props.searchFrequency)
            )
        }else if(this.props.searchLetter){
            dataFiltered = this.props.data.filter(item =>
                item.letter.toLowerCase() === this.props.searchLetter.toLowerCase()
            )
        }else if(this.props.searchFrequency){
            dataFiltered = this.props.data.filter(item => 
                Number(item.frequency) === Number(this.props.searchFrequency)
            )
        }

        const dataNode = dataFiltered.map((item, index) =>
            <DataItem
                key={index}
                id={item._id}
                no={index + 1}
                letter={item.letter}
                frequency={item.frequency}
                sent={item.sent}
            />
        )
        
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