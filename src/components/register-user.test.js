import React from 'react';
import {shallow, mount} from 'enzyme';
import RegisterUser from './register-user';
import {Redirect} from 'react-router-dom';

describe('<RegisterUser />', () => {
    const seedUser = {
        userName: 'username1',
        password: 'password'
    };

    it('Renders without crashing', () => {
        shallow(<RegisterUser />);
    });


    it('redirects if user is registered', () => {
      const wrapper = shallow(<RegisterUser isRegistered="true" />);
    //  wrapper.setProps({isRegistered: true});
    console.log(wrapper.find('Redirect'));
      console.log(wrapper.props().isRegistered);
    //  expect(wrapper.find('Redirect').prop('to')).toEqual('/');
    });

    xit('returns from if user is not registered', () => {
        const wrapper = shallow(<RegisterUser />);
      //  expect(wrapper.contains('.registration-form')).toEqual(true);
        console.log(wrapper.debug());
    });

    xit('Should dispatch postUser when form is submitted', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<RegisterUser dispatch={dispatch} />);
  //    wrapper.instance().onSubmit(seedUser);
      console.log(wrapper.instance());
      wrapper.simulate('submit');
      expect(dispatch).toHaveBeenCalledWith(postUser(seedUser));
    });
});
