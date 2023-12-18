const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans]
      }
		},
		minWidth: {
			'1/2': '50%'
		}
	},
	plugins: []
};
