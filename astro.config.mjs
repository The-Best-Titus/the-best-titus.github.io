// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
site: 'https://The-Best-Titus.github.io',
base: '/portfolio', // Your repo name
export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
