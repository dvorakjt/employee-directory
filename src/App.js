import React, { useState } from 'react';
import Header from './Components/Header/Header.js';
import Searchbar from './Components/Searchbar/Searchbar'
import Table from './Components/Table/Table';
import * as data from './data/animeChars.json';
import CharacterContext from "./utils/CharacterContext";

function App() {
  const allChars = data.default.characters
  const [charState, setCharState] = useState({
    chars: allChars,
    filterResults: (animeFilter, roleFilter, bdayFilter, affilFilter, searchCat, searchTerm) => {
      setCharState({
        ...charState, chars: allChars.filter(character => {
          if (animeFilter === "All") return true;
          else return character.anime.includes(animeFilter);
        }).filter(character => {
          if (roleFilter === "All") return true;
          else return character.roles.includes(roleFilter);
        }).filter(character => {
          if (bdayFilter === "All") return true;
          else return character.birthday.includes(bdayFilter);
        }).filter(character => {
          if (affilFilter === "All") return true;
          else return character.affiliation.includes(affilFilter);
        }).filter(character => {
          if (searchTerm.length === 0) {
            return true;
          } else {
            const lcSearchCat = searchCat.toLowerCase();
            const lcSearchTerm = searchTerm.toLowerCase();
            if (lcSearchCat === "name") {
              return (character.firstName.toLowerCase().includes(lcSearchTerm) || character.lastName.toLowerCase().includes(lcSearchTerm));
            } else {
              return (character[lcSearchCat].includes(lcSearchTerm));
            }
          }
        })
      })
    }
  })

  return (
    <div className="App">
      <Header />
      <CharacterContext.Provider value={charState}>
        <div className="container">
          <Searchbar />
          <Table chars={charState.chars} />
        </div>
      </CharacterContext.Provider>
    </div>
  );
}

export default App;
