import type from "../type";

const initialState = {
    userProfileDetails: 0,

}
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.EDIT_PROFILE: {
            let data = action.payload
            console.log("userProfileDetails", data)
            return {...state,userProfileDetails: data * 2 };
        }
   
        default:
            return { ...state };
    }
}
export default ProfileReducer;