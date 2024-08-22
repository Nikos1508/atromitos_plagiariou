/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blanched-almond': 	'#FFEBCD',
				'dropdown-bg': '#5375A9',
				
			  },
			width: {
				'380px': '380px'
			}
		},
	},
	plugins: [],
}
