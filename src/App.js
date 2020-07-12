import React, { useState } from 'react';
import Header from './Components/Header/Header.js';
import Searchbar from './Components/Searchbar/Searchbar'
import Table from './Components/Table/Table';
import * as data from './data/animeChars.json';
import CharacterContext from "./utils/CharacterContext";

function App() {
  //read the list of all characters from the imported json file
  const allChars = data.default.characters
  /* now set the state.
  The state object contains two properties: chars and filterResults().
  chars is an array and is defaulted to allChars
  filterResults() is a function that will be used in the SearchBar component
  */
  const [charState, setCharState] = useState({
    //initialize chars to allChars
    chars: allChars,
    filterResults: (animeFilter, roleFilter, bdayFilter, affilFilter, searchCat, searchTerm, alphaOrder) => {
      setCharState({
        ...charState, chars: allChars.filter(character => {
          //if the animeFilter is set to all, return true for every element
          if (animeFilter === "All") return true;
          //otherwise, check that character.anime includes the string passed to this function
          else return character.anime.includes(animeFilter);
        }).filter(character => {
          //now take these results and filter again, this time according to role
          if (roleFilter === "All") return true;
          else return character.roles.includes(roleFilter);
        }).filter(character => {
          //filter once more according to birthday
          if (bdayFilter === "All") return true;
          else return character.birthday.includes(bdayFilter);
        }).filter(character => {
          //now filter according to affiliation
          if (affilFilter === "All") return true;
          else return character.affiliation.includes(affilFilter);
        }).filter(character => {
          //filter according to the search term
          //if there is no search term, return true for every character
          if (searchTerm.length === 0) {
            return true;
          } else {
            //otherwise, convert the search category and term to lowercase.
            const lcSearchCat = searchCat.toLowerCase();
            const lcSearchTerm = searchTerm.toLowerCase();
            //if the search category is name, we need to check both the firstName and lastName properties of the current character
            if (lcSearchCat === "name") {
              return (character.firstName.toLowerCase().includes(lcSearchTerm) || character.lastName.toLowerCase().includes(lcSearchTerm));
            } else {
              //otherwise, we plug the search category in as a property, and check if that proper includes the search term
              return (character[lcSearchCat].toLowerCase().includes(lcSearchTerm));
            }
          }
        }).sort(
          //now, use a function to sort
          function (a, b) {
            //this function will compare every element. first, get the lastNames of each object, and convert then to lc for comparison
            const name1 = a.lastName.toLowerCase();
            const name2 = b.lastName.toLowerCase();
            //if the order is set to A to Z, sort them in ascending order
            if (alphaOrder === "AtoZ") {
              //if name1 is less than name 2, it's letters come earlier in the alphabet so put it earlier in the order
              if (name1 < name2) {
                return -1;
              }
              //if name 1 is greater than name 2, put it later in the array
              if (name1 > name2) {
                return 1;
              } else {
                // if names are the same
                return 0;
              }
            } else { //if ZtoA, do the opposite
              if (name1 < name2) {
                return 1;
              }
              if (name1 > name2) {
                return -1;
              } else {
                // if names are the same
                return 0;
              }
            }
          }
        )
      })
    }
  })

  return (
    <div className="App">
      <Header />
      {/*Use Context to allow the SearchBar to access global state*/}
      <CharacterContext.Provider value={charState}>
        <div className="container">
          <Searchbar />
          <Table chars={charState.chars} />
        </div>
      </CharacterContext.Provider>
    </div>
  );
}

//export the app!
export default App;