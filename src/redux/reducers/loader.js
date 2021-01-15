import { LOADED } from '../types/loader';

const loader = (state = false, action) => {

    switch(action.type) {

        case LOADED:
            return state = true;
        
        default:
            return state;
    }
}

export default loader;