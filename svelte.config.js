import preprocess from 'svelte-preprocess';
const netlify = require('@sveltejs/adapter-netlify')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify()
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
