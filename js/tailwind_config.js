// js/tailwind_config.js

tailwind.config = {
    theme: {
        extend: {
            colors: {
                "primary-pink": "#FF69B4", // Hot Pink - Nuestro color principal
                "secondary-purple": "#9333ea", // Purple 700 - Color de acento
                "background-deep": "#0f172a", // Slate 900 - Fondo oscuro y elegante
                "accent-yellow": "#facc15", // Yellow 400 - Para resaltar
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                handwritten: ["Pacifico", "cursive"],
            },
            keyframes: {
                "pulse-grow": {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                },
                "heart-beat": {
                    "0%, 100%": { transform: "scale(1)" },
                    "25%": { transform: "scale(1.2)" },
                    "50%": { transform: "scale(1.1)" },
                    "75%": { transform: "scale(1.2)" },
                },
            },
            animation: {
                "pulse-grow": "pulse-grow 2s infinite ease-in-out",
                "heart-beat": "heart-beat 1s infinite",
            },
        },
    },
};