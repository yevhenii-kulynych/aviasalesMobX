import { ERASE_DATA, SET_DATA } from "../types/form";


const initialState = {};

const form = (state = initialState, action) => {

    switch (action.type) {

        case SET_DATA:
            return  Object.assign({}, state, {
                ...action.payload
            })

        case ERASE_DATA:

            return Object.assign({})

        default:
            return state;
    }
}

export default form;