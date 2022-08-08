/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        borderRadius: {
            'large': '16px',
        },
        extend: {
            backgroundImage: theme => ({
                'hero-bg': "url('/bg-2.png')",
                'radial-at-t':
                    'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
            })
        },
    },
    plugins: [],
}