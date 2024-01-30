import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$actions: resolve('./src/actions'),
			$components: resolve('./src/components'),
			$icons: resolve('./src/icons'),
			$stores: resolve('./src/stores'),
			$utilities: resolve('./src/utilities')
		}
	}
});
