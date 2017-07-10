/**
 * Created by Counter on 7/2/2017.
 */
import * as actions from './authActions'
import * as types from '../common/actionTypes'
import USER from '../common/users'
import localStorageMock from '../mock-local-storage';

window.localStorage = localStorageMock;

describe('actions', () => {
    describe('login action',()=>{
        test('successfully logged in if provided correct credentials', () => {
            const user ={email:USER[0].email,password:USER[0].password};
            const expectedAction = {
                type: types.LOGGED_IN,
                payload:{token:USER[0].token,email:USER[0].email}
            }
            expect(actions.login(user)).toEqual(expectedAction)
        })
        test('throw error if Wrong Credentials provided', () => {
            const user ={email:'jhjhv',password:'ojjvko'};
            const expectedAction = {
                type: types.WRONG_CREDENTIALS,
                payload:'email or password is invalid'
            }
            expect(actions.login(user)).toEqual(expectedAction)
        })
    })
    describe('logout action',()=>{

        test('should logout user ', () => {

            const expectedAction = {
                type: types.LOGGED_OUT,
                payload:false
            }
            expect(actions.logout()).toEqual(expectedAction)
        })
    })

})