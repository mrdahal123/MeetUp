import type from "../type";

export function EditProfile (data) {
    return{
        type:type.EDIT_PROFILE,
        payload :data
    }
}