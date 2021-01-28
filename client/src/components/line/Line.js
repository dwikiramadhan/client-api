import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineBox from '../../containers/line/LineBox';

import { loadDataDate } from '../../actions/dataDates'

class Line extends Component {
    componentDidMount() {
        this.props.loadDataDate();
    }
    render() {
        const letter = this.props.data.map(item => item.letter)
        const frequency = this.props.data.map(item => item.frequency)
        return (
            <LineBox labels={letter} data={frequency} />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.dataDates
})

const mapDispatchToProps = (dispatch) => ({
    loadDataDate: () => dispatch(loadDataDate())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Line)