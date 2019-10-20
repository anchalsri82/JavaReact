import React from 'react';
import { shallow } from 'enzyme';
import InvoicesReceivable from './invoicesreceivable';

describe('<InvoicesReceivable />', () => {
  test('renders', () => {
    const wrapper = shallow(<InvoicesReceivable />);
    expect(wrapper).toMatchSnapshot();
  });
});
