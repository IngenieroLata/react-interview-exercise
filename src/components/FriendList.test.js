import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import FriendList from './FriendList';

const props = {
  friends: [
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
  actions: {
    starFriend: jest.fn(),
    deleteFriend: jest.fn()
  }
};

describe('<FriendList />', () => {
  it('Matches the snapshot render', () => {
    const wrapper = shallow(<FriendList {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
