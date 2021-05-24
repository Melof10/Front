import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './index';

configure({ adapter: new Adapter() });

describe('render Dashboard', () => {
    test('matches snapshot', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper).toMatchSnapshot();
    });
});