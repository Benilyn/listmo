import React from 'react';
import {shallow, mount} from 'enzyme';
import AddTask from './add-task';

describe('<AddTask />', () => {
    it('Renders without crashing', () => {
        shallow(<AddTask />);
    });

    xit('Renders the add button initially', () => {
        const wrapper = shallow(<AddTask />);
        expect(wrapper.hasClass('add-button')).toEqual(true);
    });

    xit('Should render the add form when editing', () => {
        const wrapper = mount(<AddTask />).dive();
        wrapper.instance().setEditing(true);
        wrapper.update();
        expect(wrapper.hasClass('add-task-form')).toEqual(true);
    });
});
