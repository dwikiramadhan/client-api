import React, { Component } from 'react';
import { connect } from 'react-redux';
import PieBox from '../../containers/pie/PieBox';

import { loadData } from '../../actions/datas'

class Pie extends Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        const letter = this.props.data.map(item => item.letter)
        const frequency = this.props.data.map(item => item.frequency)
        return (
            <PieBox labels={letter} data={frequency} />
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
)(Pie)