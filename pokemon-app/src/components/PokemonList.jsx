import React from 'react';
import PokemonCard from './PokemonCard';
import usePokemonData from '../hooks/usePokemonData';
import LoadingSpinner from './LoadingSpinner';

const PokemonList = () => {
  const { data, loading, error } = usePokemonData();

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error al cargar los Pokémon: {error.message}</div>;

  return (
    <div className="pokemon-list">
      {data.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;