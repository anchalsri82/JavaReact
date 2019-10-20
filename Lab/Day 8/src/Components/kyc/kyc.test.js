import React from 'react';
import { shallow } from 'enzyme';
import Kyc from './kyc';

describe('<Kyc />', () => {
  test('renders', () => {
    const wrapper = shallow(<Kyc />);
    expect(wrapper).toMatchSnapshot();
  });
});
