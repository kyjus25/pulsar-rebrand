/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['"Roboto"'],
			},
			colors: {
				background: '#888'
			},
			keyframes: {
				slide: {
				  '0%, 100%': { transform: 'translateY(0)' },
				  '50%': { transform: 'translateY(-20%)' },
				}
			},
			animation: {
				'slide-slow': 'slide 6s linear infinite',
			}
		},
	},
	plugins: [],
}
