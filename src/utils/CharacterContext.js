import { createContext } from 'react';

const CharacterContext = createContext({
    chars: [],
    filterResults: function () { }
});

export default CharacterContext;