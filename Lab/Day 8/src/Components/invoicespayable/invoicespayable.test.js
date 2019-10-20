import React from 'react';
import { shallow } from 'enzyme';
import InvoicesPayable from './invoicespayable';

describe('<InvoicesPayable />', () => {
  test('renders', () => {
    const wrapper = shallow(<InvoicesPayable />);
    expect(wrapper).toMatchSnapshot();
  });
});
