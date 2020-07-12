import React from 'react';
import './style.css';

function TableRow(props) {
    return (
        <>
            <tr className="topOfBox">
                <td>
                    <img src={props.img} alt={`${props.firstName} ${props.lastName}`} />
                </td>
                <td>
                    {props.lastName}
                </td>
                <td>
                    {props.firstName}
                </td>
                <td>
                    {props.anime}
                </td>
                <td>
                    {props.affiliation}
                </td>
            </tr>
            <tr>
                <td colSpan="5">
                    <b>Roles: </b>{props.roles}
                </td>
            </tr>
            <tr>
                <td colSpan="5">
                    <b>Likes: </b>{props.likes}
                </td>
            </tr>
            <tr className="bottomOfBox">
                <td colSpan="5">
                    <b> Dislikes: </b>{props.dislikes}
                </td>
            </tr>
        </>
    )
}

export default TableRow;