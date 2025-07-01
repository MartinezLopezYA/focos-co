/**@type {import ('tailwindcss').Config;}*/

module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#32394C',
                    light: '#4A536B',
                    dark: '#21283B',
                },
                accent: {
                    DEFAULT: '#FBB03B',
                    light: '#FCCA66',
                    dark: '#D9982E',
                },
                secondary: {
                    DEFAULT: '#F48E20',
                    light: '#F7A74E',
                    dark: '#CC7717',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Poppins', 'Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};