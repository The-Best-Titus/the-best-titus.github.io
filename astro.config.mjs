// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config

export default defineConfig({
  site: 'https://the-best-titus.github.io',
  base: '/portfolio', // Your repo name
  trailingSlash: 'ignore',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
