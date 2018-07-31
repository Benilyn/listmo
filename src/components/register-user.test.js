import React from 'react';
import {shallow, mount} from 'enzyme';
import RegisterUser from './register-user';

describe('<RegisterUser />', () => {
    it('Renders without crashing', () => {
        shallow(<RegisterUser />);
    });
});
