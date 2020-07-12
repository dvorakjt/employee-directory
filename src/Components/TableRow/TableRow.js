//Import React, this component's stylesheet, and three emote images to use in the 'affiliation' data cell
import React from 'react';
import './style.css';
import goodEmote from "../../images/goodEmote.png";
import evilEmote from "../../images/evilEmote.png";
import neutEmote from "../../images/neutEmote.png";

function TableRow(props) {
    return (
        <>
            <tr className="topOfBox" key={(props.thisKey).toString()}>
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
                        //if the affiliation field includes "good", return the goodEmote
                        if (props.affiliation.toLowerCase().includes("good")) {
                            return goodEmote;
                        } else if (props.affiliation.toLowerCase().includes("evil")) {
                            //if it includes "evil", return the evilEmote
                            return evilEmote;
                        } else {
                            //otherwise return the neutral emote
                            return neutEmote;
                        }
                    })()}
                        //set the image's alt value to the affiliation text
                        alt={props.affiliation} />
                </td>
            </tr>
            {/*To make the key unique, take the index that was passed in and add 1000*/}
            <tr key={(props.thisKey + 1000).toString()}>
                <td colSpan="5">
                    <b>Roles: </b>{props.roles}
                </td>
            </tr>
            {/*To make the key unique, take the index that was passed in and add 2000*/}
            <tr key={(props.thisKey + 2000).toString()}>
                <td colSpan="5">
                    <b>Likes: </b>{props.likes}
                </td>
            </tr>
            {/*To make the key unique, take the index that was passed in and add 3000*/}
            <tr className="bottomOfBox" key={(props.thisKey + 3000).toString()}>
                <td colSpan="5">
                    <b> Dislikes: </b>{props.dislikes}
                </td>
            </tr>
        </>
    )
}

//export the row component
export default TableRow;