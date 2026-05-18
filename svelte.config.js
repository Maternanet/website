import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import vercel from '@sveltejs/adapter-vercel';
import auto from '@sveltejs/adapter-auto';

const adapter = process.env.VERCEL ? vercel() : auto();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter,
		// Required for PostHog session replay to work correctly with SSR
		paths: {
			relative: false
		}
	}
};

export default config;
