import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class PieBox extends Component {

    render() {
        const chart = {
            labels: this.props.labels,
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    data: this.props.data
                }
            ]
        }
        return (
            <div>
                <h2><b>Pie Chart</b></h2>
                <Pie
                    ref="chart"
                    height={100}
                    data={chart}
                />
            </div>
        )
    }
}