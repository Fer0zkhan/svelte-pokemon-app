import { writable } from 'svelte/store';

export const pokemon = writable([]);

const pokemonDetails = {};
let loaded = false;

export const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const response = await fetch(url);
	const data = await response.json();
	const loadedPokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemon.set(loadedPokemon);
};

export const fetchPokemonById = async (id) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const response = await fetch(url);
		const pokemonData = await response.json();
		pokemonDetails[id] = pokemonData;
		return pokemonData;
	} catch (error) {
		throw new Error(error.message);
	}
};
