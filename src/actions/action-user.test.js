import {
    ADD_USER,
    addUser,
    CLEAR_USER,
    clearUser,
    postUser
} from './action-user.js'

describe('addUser', () => {
    it('should return the action', () => {
        const user = 'Add User';
        const action = addUser(user);
        expect(action.type).toEqual(ADD_USER);
        expect(action.user).toEqual(user);
    });
});   //describe 'addUser'

describe('clearUser', () => {
    it('should clear the action', () => {
        const user = 'Add User';
        const action = clearUser(user);
        expect(action.type).toEqual(CLEAR_USER);
    });
});   //describe 'clearUser'

describe('postUser', () => {
    it.only('should dispatch postUser', () => {
        const user = {
            firstName: 'first',
            lastName: 'last',
            email: 'email@email.com',
            userName: 'username',
            password: 'password'
        };
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
              ok: true,
              json() {
                  return user;
              }
            })
        );

        const dispatch = jest.fn();
        return postUser(user)(dispatch)
            .then(() => {
                expect(dispatch).toHaveBeenCalledWith(addUser(user));
                expect(dispatch).toHaveBeenCalledWith(clearUser());
        });
    });
});   //describe 'postUser'
