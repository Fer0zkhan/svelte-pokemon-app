<script context="module">
	import { fetchPokemonById } from './../../stores/PokemonStore.js';

	export async function load({ params }) {
		const id = params.id;
		const pokemonData = await fetchPokemonById(id);
		return { props: { pokemonData } };
	}
</script>

<script>
	export let pokemonData;
	const type = pokemonData.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {pokemonData.name}</title>
</svelte:head>

<div class="card w-100 bg-primary text-primary-content">
	<div class="card-body">
		<h2 class="card-title self-center text-3xl uppercase">{pokemonData.name}</h2>
		<p class="text-center">
			Type: <strong>{type}</strong> | Height: <strong>{pokemonData.height}</strong>
			| Weight: <strong>{pokemonData.weight}</strong>
		</p>
		<img
			class="card-image w-40 h-40 self-center"
			src={pokemonData.sprites['front_default']}
			alt={pokemonData.name}
		/>
	</div>
</div>
