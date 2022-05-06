import {INCREASE, DECREASE} from "../type"


const default_state= 0;



const reducer = (state=default_state, action) =>{
    switch (action.type) {
        case INCREASE:
            return state +1;
            break;
    
        case DECREASE:
            return state -1;
            break;
        default:
            return state;
    }

};

export default reducer;