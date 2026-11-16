export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F1E8', paper: '#FFFFFF', ink: '#1F2428', muted: '#5B6269', line: '#E4D8C6',
        copper: '#B5622E', copperdark: '#8E4A21', ok: '#2F7D4F',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
