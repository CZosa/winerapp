import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheesePicker from './CheesePicker';

Enzyme.configure({ adapter: new Adapter() });

describe('CheesePicker component', () => {
  test('component renders', () => {
    const wrapper = shallow(<CheesePicker />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render image', () => {
    const wrapper = shallow(<CheesePicker />);

    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should display correct header text', () => {
    const wrapper = shallow(<CheesePicker />);

    expect(wrapper.find('h4').text()).toBe('Select Your Cheese');
  });

  it('should render select', () => {
    const wrapper = shallow(<CheesePicker />);

    expect(wrapper.find('select').exists()).toBe(true);
  });

  it('should have correct default value for select', () => {
    const wrapper = shallow(<CheesePicker />);

    expect(wrapper.find('select').props().value).toBe('');
  });

  it('should select correct value on change', () => {
    const wrapper = shallow(<CheesePicker />);

    wrapper.find('select').simulate('change', { target: { value: '2' } });

    expect(wrapper.find('select').props().value).toBe('2');
  });
});
