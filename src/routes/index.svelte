<script>
	import PokemonCard from './../components/pokemonCard.svelte';
	import { pokemon, fetchPokemon } from './../stores/PokemonStore.js';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeItem) =>
				pokeItem.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
	fetchPokemon();
</script>

<svelte:head>
    <title>PokeBox</title>
</svelte:head>

<h1 class="text-4xl my-8 text-center uppercase">Pokemon Play Cards</h1>
<input
	type="text"
	placeholder="Search Pokemon Card"
    class="input w-full"
	bind:value={searchTerm}
/>
<div class="my-4 p-3 grid gap-4 md:grid-cols-3 grid-cols-1">
	{#each filteredPokemon as pokemonItem}
		<PokemonCard {...pokemonItem} />
	{/each}
</div>
