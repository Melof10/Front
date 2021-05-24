import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Photos from './index';

configure({ adapter: new Adapter() });

describe('render Photos', () => {
    test('matches snapshot', () => {
        const wrapper = shallow(<Photos />);
        expect(wrapper).toMatchSnapshot();
    });
});