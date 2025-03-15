import React, { useState } from 'react';

const PokemonCard = ({ pokemon }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error(`Error al cargar la imagen de ${pokemon.name}`);
    setImageError(true);
  };

  return (
    <div className="pokemon-card">
      {!imageError ? (
        <img 
          src={pokemon.image} 
          alt={pokemon.name}
          className="pokemon-image"
          onError={handleImageError}
        />
      ) : (
        <div className="image-placeholder">
          No imagen disponible
        </div>
      )}
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <div className="pokemon-types">
        {pokemon.types && pokemon.types.map((type) => (
          <span key={type} className="pokemon-type">
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;