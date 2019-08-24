import { addParameters, configure } from '@storybook/react';
import yourTheme from './alephTheme';

// Option defaults.
addParameters({
  options: {
    theme: yourTheme,
  },
});
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}



configure(loadStories, module);




