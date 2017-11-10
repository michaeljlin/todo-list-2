export default store => next => action =>{
    if(typeof action.payload.then === 'function' && action.payload){
        console.log('There is a promise here');

        action.payload.then(resp => {
            const newAction = {...action, payload: resp};
            store.dispatch(newAction);
        });
        return action.payload;
    }

    return next(action);
}