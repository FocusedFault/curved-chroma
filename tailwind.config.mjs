/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  'scape-white': "#fcfcfc",
		  'scape-blue-1': '#3f74bc',
		  'scape-blue-2': '#385ea1',
		  'scape-blue-3': '#324886',
		  'scape-blue-4': '#2c326b',
		  'gray-600': "#4b5563"
		},
	  }
}
