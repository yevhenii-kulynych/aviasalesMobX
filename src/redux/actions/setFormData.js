import { ERASE_DATA, SET_DATA } from "../types/form";


export const setFormData = data => {

    return {
        type: SET_DATA,
        payload: data
    }
}

export const eraseFormData = () => {

    return {
        type: ERASE_DATA
    }
}