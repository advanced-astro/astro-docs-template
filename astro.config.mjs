import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

export default defineConfig({
	integrations: [
		mdx(),
		preact(),
		react(),
	],
	base: `/`,
	site: `https://advanced-astro.dev`,
});
