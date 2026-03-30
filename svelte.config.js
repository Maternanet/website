import { preprocess } from 'svelte/compiler';
import vercelAdapter from '@sveltejs/adapter-vercel';
import nodeAdapter from '@sveltejs/adapter-node';

// Use node adapter for local builds to avoid Windows symlink issues
// Vercel will override this with adapter-vercel when deploying
const adapter = process.env.VERCEL ? vercelAdapter() : nodeAdapter();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess,

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter
	}
};

export default config;
