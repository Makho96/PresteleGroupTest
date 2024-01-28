import type { DeepPartial, Theme } from '@chakra-ui/react';

export const colors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  dark: {
    100: '',
    200: 'rgba(225, 225, 227, 1)',
    300: 'rgba(199, 200, 202, 1)',
    400: 'rgba(166, 167, 172, 1)',
    500: '',
    600: 'rgba(117, 119, 126, 1)',
    700: 'rgba(91, 93, 102, 1)',
    800: '',
    900: 'rgba(21, 24, 36, 1)',
  },
};
