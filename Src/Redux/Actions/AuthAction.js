import type from "../type";
import Store from "../Store";

const { dispatch } = Store;

export function SignIn(data) {
    console.log("add", data)
    dispatch({
        type: type.SIGN_IN,
        payload: data
    })
}

export function SingUp(data) {
    dispatch({
        type: type.SIGN_UP,
        payload: data
    })
}

export function Logout(data) {
    dispatch({
        type: type.LOGOUT,
        payload: data
    })
}
