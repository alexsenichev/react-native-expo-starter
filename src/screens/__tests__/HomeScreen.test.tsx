import { ApplicationStore } from '@app/stores';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { View } from 'react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  let wrapper: ShallowWrapper;
  wrapper = shallow(<HomeScreen store={ApplicationStore} />);

  it('should render a <View />', () => {
    expect(wrapper.find(View));
  });
});
