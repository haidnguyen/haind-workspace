const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {},
    colors: {
      highlight: 'rgb(var(--color-highlight) / 1)',
      ...colors,
    },
  },
  plugins: [],
};
