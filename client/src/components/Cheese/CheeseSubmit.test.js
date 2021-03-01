import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheeseSubmit from './CheeseSubmit';
import WineModal from '../WineModal';

Enzyme.configure({ adapter: new Adapter() });

describe('CheeseSubmit component', () => {
  it('should receive cheeseId props', () => {
    const wrapper = mount(<CheeseSubmit cheeseId="2" />);

    expect(wrapper.props('cheeseId')).toEqual({ cheeseId: '2' });
  });

  it('renders a button', () => {
    const wrapper = shallow(<CheeseSubmit cheeseId="2" />);

    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('renders WineModal child component', () => {
    const wrapper = shallow(<CheeseSubmit cheeseId="2" />);

    expect(wrapper.find(WineModal)).toHaveLength(1);
  });
});
