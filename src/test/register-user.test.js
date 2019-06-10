import React from 'react';
import Prop from 'prop-types';
import {shallow, mount} from 'enzyme';
import {RegisterUser} from '../components/register-user';
import {Redirect} from 'react-router-dom';
import {postUser} from '../actions/action-user';

describe('<RegisterUser />', () => {

    RegisterUser.contextTypes = {
        router: Prop.object
    }

    const seedUser = {
        userName: 'username1',
        password: 'password'
    };

    it('Renders without crashing', () => {
        shallow(<RegisterUser handleSubmit={() => {} }/>);
    });


    xit('redirects if user is registered', () => {
      const wrapper = shallow(<RegisterUser isRegistered="false" />);
    //  wrapper.setProps({isRegistered: true});
    console.log(wrapper.find('form'));
      console.log(wrapper.props().isRegistered);
      expect(wrapper.find('Redirect').props('to')).toEqual('/');
    });

    it('returns from if user is not registered', () => {
        const wrapper = shallow(<RegisterUser handleSubmit={() => {} }/>);
        console.log(wrapper.find('.registration-form'));
        expect(wrapper.find('.registration-form').length).toEqual(1);
    });

    it.only('Should dispatch postUser when form is submitted', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<RegisterUser handleSubmit={() => {}} dispatch={dispatch} />);
      wrapper.instance().onSubmit(seedUser);
      //console.log(wrapper.instance());
      //wrapper.find('form').simulate('submit');
      expect(dispatch).toHaveBeenCalled();
    });
});
