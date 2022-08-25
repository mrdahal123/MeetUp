import {combineReducers} from 'redux'
import ProfileReducer from './ProfileReducer'
import AuthReducer from './AuthReducer'

const appReducer =combineReducers ({
    AuthReducer,
    ProfileReducer
})
export default appReducer;