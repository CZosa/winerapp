import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MealPicker from './MealPicker';

Enzyme.configure({ adapter: new Adapter() });

describe('MealPicker component', () => {
  test('component renders', () => {
    const wrapper = shallow(<MealPicker />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render image', () => {
    const wrapper = shallow(<MealPicker />);

    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should display all headers', () => {
    const wrapper = shallow(<MealPicker />);

    expect(wrapper.find('h4')).toHaveLength(5);
  });

  it('should render select', () => {
    const wrapper = shallow(<MealPicker />);

    expect(wrapper.find('select').exists()).toBe(true);
  });

  it('renders all 5 select menus', () => {
    const wrapper = shallow(<MealPicker />);

    const fiveNodes = wrapper.find('select');
    expect(fiveNodes.hostNodes()).toHaveLength(5);
  });

  it('should have correct default value for select', () => {
    const wrapper = shallow(<MealPicker />);

    const fiveNodes = wrapper.find('select');
    expect(fiveNodes.hostNodes().find('.select').first().props().value).toBe(
      ''
    );
  });

  it('should select correct value on change', () => {
    const wrapper = shallow(<MealPicker />);

    wrapper
      .find('select')
      .at(0)
      .simulate('change', { target: { value: '2' } });

    expect(wrapper.hostNodes().find('select').first().props().value).toBe('2');
  });
});
