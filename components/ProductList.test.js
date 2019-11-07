import 'react-native';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';

import ProductList from './ProductList';
import { dummyListSingle, dummyListMultiple } from '../assets/scripts/dummyData';

Enzyme.configure({ adapter: new Adapter() });

describe('<ProductList />', () => {
  it('renders', () => {
    const wrapper = mount(<ProductList />);
    wrapper.setState({ productList: dummyListSingle });
    expect(wrapper).toMatchSnapshot();
  });

  it('displays multiple items',() => {
    const wrapper = mount(<ProductList />);
    wrapper.setState({ productList: dummyListMultiple });
    const items = wrapper.find('Item');
    expect(items).toMatchSnapshot();
    expect(items.length).toBe(3);
  });
});

