/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#7342DC",
                "primary-dark": "#572cb3",
                "bg-color": "#ededed",
            },
            fontFamily: {
                "fira-sans": ["Fira Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}
