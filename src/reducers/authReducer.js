import { ADD_JWT, REMOVE_JWT } from '../actions/authActions'

const authReducer = (state = [], action) => {
    switch(action.type){
        case ADD_JWT:
            return [...state, action.payload]
        case REMOVE_JWT:
            return []
        default :
            return state;
    }
}

export default authReducer;