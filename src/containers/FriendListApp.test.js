import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { FriendListApp } from './FriendListApp';

const props = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      gender: 'male'
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      gender: 'male'
    },
    {
      name: 'George Washington',
      starred: false,
      gender: 'male'
    }
  ],
  pagination: {
    total: 3,
    limit: 2,
    page: 1
  },
  addFriend: jest.fn(),
  chagePage: jest.fn()
};

describe('<FriendListApp />', () => {
  const wrapper = shallow(<FriendListApp {...props} />);

  it('h1 contains corrext text', () => {
    expect(wrapper.find('h1').text()).toBe('The FriendList');
  });

  it('Matches the snapshot render', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
