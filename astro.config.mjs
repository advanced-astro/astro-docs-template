import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

import minifier from 'astro-html-minifier'

export default defineConfig({
  integrations: [mdx(), minifier(), preact(), react(), sitemap()],
  base: `/`,
  site: `https://advanced-astro.dev`
})
