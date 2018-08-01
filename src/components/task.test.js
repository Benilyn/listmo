import React from 'react';
import {shallow, mount} from 'enzyme';
import {Task} from './task';

describe('<Task />', () => {
    it('Renders without crashing', () => {
        shallow(<Task />);
    });
});
