/* eslint-disable @typescript-eslint/naming-convention */

import type {Config} from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import {withTV} from 'tailwind-variants/transformer';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			keyframes: {
				slideInFromTop: {
					'0%': {transform: 'translateY(-5%)', opacity: '0%'},
					'100%': {transform: 'translateY(0%)', opacity: '100%'},
				},
			},
			animation: {
				slideInFromTop: '0.3s ease-out 0s 1 slideInFromTop',
			},
		},
	},
	plugins: [
		tailwindcssAnimate,
	],
};

export default withTV(config);
