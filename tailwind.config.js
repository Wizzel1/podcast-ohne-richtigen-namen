const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./node_modules/preline/preline.js', './src/**/*.{html,js,svelte,ts}'], // Modify this line
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
    plugins: [require('preline/plugin')]
};