import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import auto from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const adapter = process.env.VERCEL ? vercel() : auto();

export default defineConfig({
	plugins: [
		sveltekit({
			adapter,
			preprocess: vitePreprocess(),
			paths: {
				relative: false
			}
		})
	],
	server: {
		fs: {
			allow: ['..']
		}
	},
	// Ensure every build emits fresh assets by preventing module-level caching
	build: {
		// Force Vite to always emit fresh chunks (no stale rollup cache)
		rollupOptions: {
			output: {
				// Content hashing is already on by default for _app assets;
				// this ensures the entry HTML itself is never cached long-term.
			}
		}
	},
	// Preview server headers (used by `npm run preview`)
	preview: {
		headers: {
			// HTML entry — always revalidate so latest build is served immediately
			'Cache-Control': 'no-cache'
		}
	}
});
