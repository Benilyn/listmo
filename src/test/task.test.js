import React from 'react';
import {shallow, mount} from 'enzyme';
import {Task} from '../components/task';

describe('<Task />', () => {
    it('Renders without crashing', () => {
        shallow(<Task />);
    });
});
