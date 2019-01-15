import * as React from 'react';
import { mount } from 'enzyme';
import Header from '../components/Header';

describe('Header test', () => {
  it('should render component correctly', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
