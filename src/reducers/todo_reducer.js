import types from '../actions/types';

const DEFAULT_STATE = { all:[], single: null };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_ALL:
            // console.log("GET ALL: ", action.payload);
            return {...state, all: action.payload.data.todos };
        case types.GET_SINGLE:
            // console.log('GET SINGLE: ', action.payload);
            // return {...state, single: action.payload.data.todo};
        case types.TOGGLE_COMPLETE:
            // console.log('TOGGLE COMPLETE: ', action.payload);
            return {...state, single:action.payload.data.todo};
        case types.DELETE_ITEM:
            console.log('DELETE ITEM: ', action.payload);
            return state;
        default:
            return state;
    }
}