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
				'mauve-text': '#211F26',
			},
			backgroundColor: {
				'dark-background': '#0D0C1D',
				'sakura-white': '#F5F5F5',
				'mauve-text': '#211F26',
				overlay: 'rgba(0, 0, 0, 0.2)',
			},
			backgroundImage: {
				hero: "url('/img/japanese_temple_with_a_man_standing_in_front_of.webp')",
			},
			backgroundPosition: {
				'50-70': '50% 70%',
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
		screens: {
			mobile: { min: '320px', max: '767px' },
			tablet: { min: '768px', max: '1024px' },
		},
	},
	plugins: [],
};
