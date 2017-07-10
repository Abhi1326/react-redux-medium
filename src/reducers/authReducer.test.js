/**
 * Created by Counter on 7/1/2017.
 */
import authReducer from './authReducer'
import *  as types from '../common/actionTypes'


test('it has a default state', () => {
    expect(authReducer(undefined,{type:'unexpected'})).toEqual({isAuthenticated:false,user:{},authenticationError:''});
});

test('it can handle login', () => {
    expect(authReducer(undefined,{
        type:types.LOGGED_IN,
        payload:{email:'email@email.com', token:'kasdkjfu134234'}
    })).toEqual({isAuthenticated:true,user:{email:'email@email.com', token:'kasdkjfu134234'},authenticationError:''});
});

test('it can handle logout', () => {
    expect(authReducer(undefined,{
        type:types.LOGGED_OUT,
        payload:false
    })).toEqual({isAuthenticated:false,user:{},authenticationError:''});
});

test('it can handle Wrong Crendentials', () => {
    expect(authReducer(undefined,{
        type:types.WRONG_CREDENTIALS,
        payload:'email or password is invalid'
    })).toEqual({isAuthenticated:false,user:{},authenticationError:'email or password is invalid'});
});