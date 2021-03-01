import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MealSubmit from './MealSubmit';
import WineModal from '../WineModal';

Enzyme.configure({ adapter: new Adapter() });

describe('MealSubmit component', () => {
  it('should receive props', () => {
    const wrapper = mount(
      <MealSubmit
        meatId="3"
        prepId="3"
        vegId="3"
        seasoningId="3"
        starchId="3"
      />
    );

    expect(wrapper.instance().props).toMatchObject({
      meatId: '3',
      prepId: '3',
      vegId: '3',
      seasoningId: '3',
      starchId: '3',
    });
  });

  it('renders a button', () => {
    const wrapper = shallow(
      <MealSubmit
        meatId="3"
        prepId="3"
        vegId="3"
        seasoningId="3"
        starchId="3"
      />
    );

    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('renders WineModal child component', () => {
    const wrapper = shallow(
      <MealSubmit
        meatId="3"
        prepId="3"
        vegId="3"
        seasoningId="3"
        starchId="3"
      />
    );

    expect(wrapper.find(WineModal)).toHaveLength(1);
  });
});
