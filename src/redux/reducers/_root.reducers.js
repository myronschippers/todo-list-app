import { combineReducers } from 'redux';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStoreToProps'
const rootReducer = combineReducers({
});

export default rootReducer;