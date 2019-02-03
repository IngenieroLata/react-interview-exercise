import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

const props = {
  limit: 2,
  onPageChange: jest.fn()
};

describe('<Pagination />', () => {
  it('Should calculate correct pages', () => {
    const wrapper = shallow(<Pagination {...props} total={5} />);
    expect(wrapper.find('[data-testid="page"]')).toHaveLength(3);
  });

  it('Should mark active current page', () => {
    const wrapper = shallow(<Pagination {...props} total={5} />);
    expect(wrapper.find('.active').text()).toBe('1');
    wrapper.setProps({ page: 2 });
    expect(wrapper.find('.active').text()).toBe('2');
  });

  it('Should call onPageChange with correct page number', () => {
    const wrapper = shallow(<Pagination {...props} total={5} />);
    const pageLink = wrapper.find('[data-testid="page"]').last();
    pageLink.simulate('click');
    expect(props.onPageChange).toHaveBeenLastCalledWith(3);
  });

  it('Should call limit pages', () => {
    const wrapper = shallow(<Pagination {...props} total={5} />);

    wrapper.find('[data-testid="first"]').simulate('click');
    expect(props.onPageChange).toHaveBeenCalledWith(1);

    wrapper.find('[data-testid="last"]').simulate('click');
    expect(props.onPageChange).toHaveBeenCalledWith(3);
  });
});
