import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AddFriendForm from './AddFriendForm';

const props = {
  addFriend: jest.fn()
};

describe('<AddFriendForm />', () => {
  it('should control radio buttons', () => {
    const wrapper = shallow(<AddFriendForm {...props} />);
    wrapper
      .find('[value="male"]')
      .simulate('change', { target: { value: 'male', name: 'gender' } });
    expect(wrapper.state('gender')).toBe('male');
  });

  it('should control input text', () => {
    const wrapper = shallow(<AddFriendForm {...props} />);
    wrapper
      .find('[name="name"]')
      .simulate('change', { target: { value: 'Jon Doe', name: 'name' } });
    expect(wrapper.state('name')).toBe('Jon Doe');
  });

  it('should reset form values on submit', () => {
    const wrapper = shallow(<AddFriendForm {...props} />);
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(wrapper.state()).toEqual({
      name: '',
      gender: ''
    });
  });

  it('should call creation action', () => {
    const wrapper = shallow(<AddFriendForm {...props} />);
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(props.addFriend).toHaveBeenCalled();
  });

  it('Matches the snapshot render', () => {
    const wrapper = shallow(<AddFriendForm {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
