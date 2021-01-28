import React from 'react';
import history from '../../history';

export default function DashboardItem(props) {
    return (
        <div>
            <button type="button" className="btn btn-danger btn-lg btn-block"><i className="fa fa-line-chart"></i><br />Line</button>
            <button type="button" onClick={() => history.push('/pie')} className="btn btn-warning btn-lg btn-block"><i className="fa fa-pie-chart"></i><br />Pie</button>
            <button type="button" onClick={() => history.push('/bar')} className="btn btn-primary btn-lg btn-block"><i className="fa fa-bar-chart"></i><br />Bar</button>
            <button type="button" onClick={() => history.push('/map')} className="btn btn-success btn-lg btn-block"><i className="fa fa-map"></i><br />Maps</button>
            <button type="button" onClick={() => history.push('/login')} className="btn btn-secondary btn-lg btn-block"><i className="fa fa-user-circle"></i>  Admin Panel</button>
        </div>
    )
}