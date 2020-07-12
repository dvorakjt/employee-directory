import React from 'react';
import './style.css';
import goodEmote from "../../images/goodEmote.png";
import evilEmote from "../../images/evilEmote.png";
import neutEmote from "../../images/neutEmote.png";

function TableRow(props) {
    console.log("../src/images/" + props.affiliation.toLowerCase().slice(0, 4) + "Emote.png");
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
                    <img src={(() => {
                        if (props.affiliation.toLowerCase().includes("good")) {
                            return goodEmote;
                        } else if (props.affiliation.toLowerCase().includes("evil")) {
                            return evilEmote;
                        } else {
                            return neutEmote;
                        }
                    })()}
                        alt={props.affiliation} />
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