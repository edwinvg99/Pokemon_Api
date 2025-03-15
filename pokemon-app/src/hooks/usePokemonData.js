import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/api';

const usePokemonData = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemonData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemon(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPokemonData();
  }, []);

  return { pokemon, loading, error };
};

export default usePokemonData;