import React from 'react';
import {shallow, mount} from 'enzyme';
import Listmo from './listmo';

describe('<Listmo />', () => {
    it('Renders without crashing', () => {
        shallow(<Listmo />);
    });

});
