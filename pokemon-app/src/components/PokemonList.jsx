import React from 'react';
import PokemonCard from './PokemonCard';
import usePokemonData from '../hooks/usePokemonData';
import LoadingSpinner from './LoadingSpinner';

const PokemonList = () => {
  const { pokemon, loading, error } = usePokemonData();

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;
  if (!Array.isArray(pokemon) || pokemon.length === 0) return <div>No hay pokémon disponibles</div>;

  return (
  <>
   
    <div className="pokemon-list">
      
        {pokemon.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      
    </div>
    </>
  );
};

export default PokemonList;