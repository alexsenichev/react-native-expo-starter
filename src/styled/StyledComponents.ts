import { IApplicationTheme } from '@app/themes';
import * as styledComponents from 'styled-components/native';

interface IStyledComponent extends styledComponents.ReactNativeThemedStyledComponentsModule<IApplicationTheme> {}

const { default: styled, css, ThemeProvider } = styledComponents as IStyledComponent;

export { css, ThemeProvider };
export default styled;
