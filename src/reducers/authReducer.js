import * as types  from '../common/actionTypes'
const authReducer = (state = {isAuthenticated:false,user:{},authenticationError:''}, action) => {

    switch (action.type) {
        case types.LOGGED_IN:
            state = {
                ...state,
                isAuthenticated:true,
                user:action.payload,
                authenticationError:''

            }
            break;
        case types.LOGGED_OUT:
            state = {
                ...state,
                isAuthenticated:action.payload,
                user:{},
                authenticationError:''

            }
            break;
        case types.WRONG_CREDENTIALS:
            state={
                ...state,
                authenticationError:action.payload
            };
            break;
        default:
            state={
                ...state
            }

    }
    return state
}

export default authReducer
