module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#0a0f1d',
        darkerblue: '#13172a',
        blue: {
          800: '#123456',
          900: '#123456'
        }
      },
      backgroundImage: theme => ({
        'gradient-radial': `radial-gradient(circle at top, ${theme('colors.darkblue')}, ${theme('colors.darkerblue')})`,
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      }),
      gradientColorStops: theme => ({
        'darkblue': '#0a0f1d',
        'darkerblue': '#020511',
      }),
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
