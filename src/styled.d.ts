import 'styled-components';

import { ITheme } from '@customTypes/theme';

type CustomTheme = ITheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
