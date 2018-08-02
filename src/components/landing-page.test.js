import React from 'react';
import {shallow, mount} from 'enzyme';
import {LandingPage} from './landing-page';

describe('<LandingPage />', () => {
    const wrapper = shallow(<LandingPage />);

    it('Renders without crashing', () => {
        wrapper
    });

  it('Renders Link to "register"', () => {

        console.log(wrapper.find('Link').prop('to'));
    })
});
