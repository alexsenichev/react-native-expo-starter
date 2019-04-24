import { TabBarIcon } from '@app/components';
import { HomeScreen } from '@app/screens';
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

interface ITabSetting {
  focused: boolean;
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }: ITabSetting) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  ),
  tabBarLabel: 'Home',
};

export default createBottomTabNavigator({
  HomeStack,
});
