import types from '../actions/types';

const DEFAULT_STATE = { all:[] };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_ALL:
            console.log("GET ALL: ", action.payload);
            return { all: action.payload.data.todos };
        default:
            return state;
    }
}