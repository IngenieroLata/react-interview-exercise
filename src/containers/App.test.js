import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('App renders without errors', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').exists()).toBe(true);
});
