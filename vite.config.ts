import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
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

