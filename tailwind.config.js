module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		'mygreen': '#0C8A27',
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
	  require('@tailwindcss/typography'),
  ],
}
