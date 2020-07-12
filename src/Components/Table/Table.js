import React from 'react';
import TableRow from "../TableRow/TableRow.js";
import './style.css';
import * as data from '../../data/animeChars.json';

function Table(props) {
    const chars = data.default.characters;
    console.log(chars);
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