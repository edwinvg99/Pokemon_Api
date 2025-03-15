const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (limit = 20) => {
    try {
        const response = await fetch(`${API_URL}?limit=${limit}`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos de Pokémon');
        }
        const data = await response.json();
        const results = await Promise.all(
            data.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();
                return {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    // Usamos la imagen oficial del Pokémon
                    image: pokemonData.sprites.other['official-artwork'].front_default || 
                          pokemonData.sprites.front_default,
                    types: pokemonData.types.map(type => type.type.name)
                };
            })
        );
        return results;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};