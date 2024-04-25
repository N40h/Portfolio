/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'dark-background': '#0D0C1D',
				'sakura-white': 'F5F5F5',
			},
			backgroundColor: {
				'dark-background': '#0D0C1D',
				'sakura-white': '#F5F5F5',
			},
			boxShadow: {
				'2md': '0px 5px 10px 0px rgba(33, 31, 38, 0.2)',
				'webkit-2md':
					'-webkit-box-shadow: 0px 5px 10px 0px rgba(33, 31, 38, 0.2)',
			},
			zIndex: {
				100: '100',
			},
		},
	},
	plugins: [],
};
