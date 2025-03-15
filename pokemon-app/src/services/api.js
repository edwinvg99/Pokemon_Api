const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (limit = 20) => {
    try {
        const response = await fetch(`${API_URL}?limit=${limit}`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos de Pokémon');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};