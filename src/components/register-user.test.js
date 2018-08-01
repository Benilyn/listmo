import React from 'react';
import {shallow, mount} from 'enzyme';
import RegisterUser from './register-user';

describe('<RegisterUser />', () => {
    const seedUser = {
        userName: 'username1',
        password: 'password'
    };

    it('Renders without crashing', () => {
        shallow(<RegisterUser />);
    });

    it('Should dispatch postUser when form is submitted', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<RegisterUser dispatch={dispatch} />);
      wrapper.instance().onSubmit(seedUser);
      wrapper.simulate('submit');
      expect(dispatch).toHaveBeenCalledWith(postUser(seedUser));
    });
});
