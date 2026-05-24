// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://projeto-arthur.github.io',
  base: '/projeto-arthur',

  vite: {
    plugins: [
      tailwindv4()
    ]
  }
});