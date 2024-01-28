import { extendTheme } from '@chakra-ui/react';

import { fonts } from './fonts';
import { colors } from './colors';

const customTheme = extendTheme({
  fonts,
  colors,
  breakpoints: {
    'base': '0',
    'xs': '320px',
    'sm': '548px',
    'smd': '590px',
    'md': '768px',
    'lg': '992px',
    'xl': '1440px',
    '2xl': '1880px',
    '3xl': '2324px'
  },
  styles: {
    global: {
      body: {
        bg: "#F9FAFC",
      },
    },
  },
});

export default customTheme