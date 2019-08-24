import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: '#27AEE3',

  // UI
  appBg: 'white',
  appContentBg: 'ghostwhite',
   appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto","Open Sans", sans-serif',
  fontCode: '"Roboto",monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors


  

  brandTitle: 'My custom storybook',
  brandUrl: 'https://s3-ap-southeast-1.amazonaws.com/kalibrr-company-assets/logos/KNCVG6SYX5U4MJEJEE4T-59001479.png',
  brandImage: 'https://s3-ap-southeast-1.amazonaws.com/kalibrr-company-assets/logos/KNCVG6SYX5U4MJEJEE4T-59001479.png',
});