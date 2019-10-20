import React from 'react';
import { shallow } from 'enzyme';
import Companies from './companies';

describe('<Companies />', () => {
  test('renders', () => {
    const wrapper = shallow(<Companies />);
    expect(wrapper).toMatchSnapshot();
  });
});
