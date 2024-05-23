const { transform } = require('next/dist/build/swc');

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
				whity: '#f7f7f7',
				darken: '#010101',
				sunny: '#F1B9A2',
				'cherry-blossom': '#FFB7C5',
			},
			backgroundColor: {
				whity: '#f7f7f7',
				darken: '#010101',
				sunny: '#F1B9A2',
				'cherry-blossom': '#FFB7C5',
				'modal-overlay': 'rgba(49, 49, 49, 0.8)',
			},
			backgroundImage: {
				hero: "url('/img/japanese_temple_with_a_man_standing_in_front_of.webp')",
			},
			backgroundPosition: {
				'50-70': '50% 70%',
			},
			borderRadius: {
				'50%': '50%',
			},
			zIndex: {
				100: '100',
				1000: '1000',
			},
			animation: {
				scroll: 'scroll 2.5s infinite',
				fadeIn: 'fadeIn 0.5s ease forwards',
			},
			keyframes: {
				scroll: {
					'0%': { top: '10%', bottom: '80%', opacity: '1' },
					'100%': { top: '80%', bottom: '20%', opacity: '0' },
				},
				fadeIn: {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};
