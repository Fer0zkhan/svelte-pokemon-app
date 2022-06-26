<script>
	import { fade } from 'svelte/transition';
	export let id;
	export let name;
	export let image;
</script>

<!-- <a
	href={`/pokemon/${id}`}
	class="p-6 bg-gray-100 text-gray-800 text-center shadow-sm rounded-md hover:shadow-md flex flex-col items-center"
	transition:fade
>
	<img class="h-40 w-40" src={image} alt={`Pokemon ${name}`} />
	<h2 class="uppercase text-2xl">{id}. {name}</h2>
</a> -->
<div class="card w-70 bg-base-100 shadow-xl" transition:fade>
	<figure class="px-10 pt-10">
		<img src={image} alt={`Pokemon ${name}`} class="rounded-xl h-40 w-40" />
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title">{id}. {name}</h2>
		<!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
		<div class="card-actions">
			<a href={`/pokemon/${id}`} class="btn btn-primary">Show Details</a>
		</div>
	</div>
</div>
<!-- <div class="card w-96 bg-base-100 shadow-xl">
	<figure class="px-10 pt-10">
		<img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title">Shoes!</h2>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<div class="card-actions">
			<button class="btn btn-primary">Buy Now</button>
		</div>
	</div>
</div> -->
