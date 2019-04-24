import { IApplicationTheme } from '@app/themes';
import { Icon } from 'expo';
import React from 'react';
import { withTheme } from 'styled-components';

interface ITabBar {
  name: string;
  focused: boolean;
  theme: IApplicationTheme;
}

function TabBarIcon({ name, focused, theme }: ITabBar) {
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? theme.tabIconSelected : theme.tabIconDefault}
    />
  );
}

export default withTheme(TabBarIcon);
