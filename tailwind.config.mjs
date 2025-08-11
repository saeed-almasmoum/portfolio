/** @type {import('tailwindcss').Config} */

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
				primary : '#1c1c22',
				accent : {
					DEFAULT: '#00ff99',
					hover : '#00e187',
				},
                background: 'var(--background)',
                foreground: 'var(--foreground)'
            },
            container: {
                padding: "15px",
                center: true
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        },
        screens: {
            xl: '1200px',
            lg: '960px',
            md: '768px',
            sm: '640px'
        },
        fontFamily: {
            primary: "var(--font-jetbrainsMono)"
        }
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;