import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/rootReducer"
import {ICourse} from "../actions/courseActions"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initalState: Array<ICourse>){
    return createStore(rootReducer, initalState, applyMiddleware(reduxImmutableStateInvariant()));
}