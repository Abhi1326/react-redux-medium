/**
In case of multiple reducer we can use combineReducer
 method from redux
**/
import {combineReducers} from 'redux'
import AuthReducer from './authReducer'

export default  combineReducers({
        auth:AuthReducer
})
