import {ADD_COMMENT} from './actions';
const initialState = {
 comments: []
};

export default function(state = initialState, action){
 if(action.type === ADD_COMMENT){
    return Object.assign({}, state, {
        comments: action.comment
    });
}

return state;
}