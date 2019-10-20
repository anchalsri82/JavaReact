import React from 'react';
import { shallow } from 'enzyme';
import NavRoutes from './navRoutes';

describe('<NavRoutes />', () => {
  test('renders', () => {
    const wrapper = shallow(<NavRoutes />);
    expect(wrapper).toMatchSnapshot();
  });
});
