module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		"whatsapp-gray": "#EDEDED",
        "whatsapp-dark-gray": "gray",
        "whatsapp-beige": "#DADBD3",
        "whatsapp-green": "#DCF8C6",
    	},
      backgroundImage: {
        "whatsapp": "url('/images/background.png')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
