import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      purple: string,
      lightred: string,
      white: string,
      offwhite: string,
      lightgrey: string,
      smokeygrey: string,
      offblack: string,
    }
  }
}