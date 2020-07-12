import React from 'react';
import Header from './Components/Header/Header.js';
import Searchbar from './Components/Searchbar/Searchbar'
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Searchbar />
        <Table />
      </div>
    </div>
  );
}

export default App;
