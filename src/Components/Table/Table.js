import React from 'react';
import TableRow from "../TableRow/TableRow.js";
import './style.css';

function Table(props) {
    //destructure the props and grab the chars array
    const { chars } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Anime</th>
                    <th>Affiliation</th>
                </tr>
            </thead>
            <tbody>
                {chars.map(character => (
                    <TableRow img={character.image} firstName={character.firstName} lastName={character.lastName} anime={character.anime} affiliation={character.affiliation} roles={character.roles} likes={character.likes} dislikes={character.dislikes} />
                ))}
            </tbody>
        </table>
    )
}

export default Table;