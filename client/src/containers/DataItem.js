import React from 'react';

export default function DataItem(props) {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.letter}</td>
            <td>{props.frequency}</td>
            <td>
                <button className="btn btn-success mr-2"><i className="fa fa-edit"></i> update</button>
                <button className="btn btn-danger"><i className="fa fa-trash"></i> delete</button>
            </td>
        </tr>
    )
}