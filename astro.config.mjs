import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import devTools from "vite-plugin-devtools-json";

// https://astro.build/config
export default defineConfig({
	site: 'https://tiny-hotteok-8cd8b8.netlify.app/', // Write here your website url
	markdown: {
		// remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	vite: {
		plugins: [
			devTools(),
		],
		optimizeDeps: {
			noDiscovery: true,
			include: [],
			exclude: ['reading-time']
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight',
				  },
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind(),
		react({
		})
	]
})
