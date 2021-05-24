import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Posts from './index';

configure({ adapter: new Adapter() });

describe('render Posts', () => {
    test('matches snapshot', () => {
        const wrapper = shallow(<Posts />);
        expect(wrapper).toMatchSnapshot();
    });
});