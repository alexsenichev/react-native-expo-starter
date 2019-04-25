import { defaultTheme } from './defaultTheme';
export type IApplicationTheme = typeof defaultTheme;

export interface IThemedComponent {
  theme: IApplicationTheme;
}

export { defaultTheme };
