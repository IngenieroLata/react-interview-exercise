import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import FriendListItem from './FriendListItem';

const props = {
  id: 1,
  name: 'Jane Doe',
  starred: true,
  gender: 'female',
  starFriend: jest.fn(),
  deleteFriend: jest.fn()
};

describe('<FriendListItem />', () => {
  it('Render the correct Name', () => {
    const wrapper = shallow(<FriendListItem {...props} />);
    expect(wrapper.find('[data-testid="name"]').text()).toBe('Jane Doe');
  });

  it('Render the correct Gender', () => {
    const wrapper = shallow(<FriendListItem {...props} />);
    expect(wrapper.find('[data-testid="gender"]').text()).toBe('female');
  });

  it('Render the mark as active star', () => {
    const wrapper = shallow(<FriendListItem {...props} />);
    expect(wrapper.find('.fa-star')).toHaveLength(1);
  });

  it('Call starFriend action', () => {
    const wrapper = shallow(<FriendListItem {...props} />);
    wrapper.find('[data-testid="star"]').simulate('click');
    expect(props.starFriend).toHaveBeenCalledWith(props.id);
  });

  it('Call deleteFriend action', () => {
    const wrapper = shallow(<FriendListItem {...props} />);
    wrapper.find('[data-testid="delete"]').simulate('click');
    expect(props.deleteFriend).toHaveBeenCalledWith(props.id);
  });

  it('Matches the snapshot render', () => {
    const wrapper = shallow(<FriendListItem {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
