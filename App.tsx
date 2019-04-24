import { applicationConfig } from '@app/config';
import { AppNavigator } from '@app/navigation';
import { ApplicationStore } from '@app/stores';
import { styled, ThemeProvider } from '@app/styled';
import { defaultTheme } from '@app/themes';
import { Provider } from 'mobx-react';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Sentry from 'sentry-expo';

Sentry.config(applicationConfig.sentryDSN).install();

const Wrapper = styled.View`
  flex: 1;
`;

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={ApplicationStore}>
        <ThemeProvider theme={defaultTheme}>
          <Wrapper>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </Wrapper>
        </ThemeProvider>
      </Provider>
    );
  }
}
