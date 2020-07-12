//Import React, the TableRow component and this component's stylesheet
import React from 'react';
import TableRow from "../TableRow/TableRow.js";
import './style.css';

function Table(props) {
    //destructure the props and grab the chars array
    const { chars } = props;
    return (
        <table>
            <thead key="head">
                <tr key="headRow">
                    <th key="image">Image</th>
                    <th key="lastName">Last Name</th>
                    <th key="firstName">First Name</th>
                    <th key="anime">Anime</th>
                    <th key="affil">Affiliation</th>
                </tr>
            </thead>
            <tbody key="body">
                {/*within the body, for each character, add a new row and pass that character's info in as props*/}
                {chars.map((character, index) => (
                    <TableRow img={character.image} firstName={character.firstName} lastName={character.lastName} anime={character.anime} affiliation={character.affiliation} roles={character.roles} likes={character.likes} dislikes={character.dislikes} thisKey={index} />
                ))}
            </tbody>
        </table>
    )
}

//Export the table component
export default Table;