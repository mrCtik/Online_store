// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: "class",
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//         // screens: {
//         //     lg: { max: "992px" },
//         //     md: { max: "768px" },
//         //     sm: { max: "480px" }
//         // },
//         container: {
//             padding: "20px",
//             center: true
//         },
//         extend: {
//             // colors: {
//             //     lightblack: "#4D4244",
//             //     lightred: "#FF0D38",
//             //     darkred: "#D70026",
//             //     lightgray: "#747474",
//             //     darkgray: "#272727"
//             // }
//         }
//     },
//     plugins: [
//         require("flowbite/plugin"),
//         require("@tailwindcss/line-clamp"),
//         require("@tailwindcss/typography")
//     ]
// };
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "regal-blue": "#243c5a"
            }
        },
        screens: {
            xs: "425px",
            ...defaultTheme.screens
        }
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/typography"),
        require("flowbite/plugin")
    ]
};
