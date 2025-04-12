/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				// Updated gradient animation with #00ff99 and #fff
				gradientAnimation: {
					"0%": { "background-position": "0% 50%" },
					"50%": { "background-position": "100% 50%" },
					"100%": { "background-position": "0% 50%" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"gradient-animation": "gradientAnimation 5s ease infinite",
			},
			colors: {
				primary: "#1c1c22",
				accent: {
					DEFAULT: "#00ff99",
					hover: "#00e187",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};  