import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarBox from '../../containers/bar/BarBox';

import { loadData } from '../../actions/datas'

class Bar extends Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        const letter = this.props.data.map(item => item.letter)
        const frequency = this.props.data.map(item => item.frequency)
        return (
            <BarBox labels={letter} data={frequency} />
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
)(Bar)