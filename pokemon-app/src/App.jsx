import React from 'react';
import PokemonList from './components/PokemonList';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Pokémon App</h1>
      <hr />
      <PokemonList />
    </div>
  );
};

export default App;