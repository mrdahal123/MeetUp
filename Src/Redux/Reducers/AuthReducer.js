import type from "../type";

const initialState = {
    LoginUserDetails: 0,

}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SIGN_IN: {
            let data = action.payload
            console.log("LoginUserDetails", data)
            return {...state,LoginUserDetails: data + 1 };
        }
        case type.LOGOUT: {
            let data = action.payload
            console.log("LoginUserDetails", data)
            return {...state,LoginUserDetails: data - 1 };
        }
        default:
            return { ...state };
    }
}
export default AuthReducer;