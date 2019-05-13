import { defaultTheme } from '@app/themes';
import { Icon } from 'expo';
import React from 'react';

interface ITabBar {
  name: string;
  focused: boolean;
}

export default function TabBarIcon({ name, focused }: ITabBar) {
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? defaultTheme.tabIconSelected : defaultTheme.tabIconDefault}
    />
  );
}
