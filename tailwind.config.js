/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '320px',
            // => @media (min-width: 640px) { ... }

            md: '640px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('tailwindcss'), require('autoprefixer')],
};