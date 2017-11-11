import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/rootReducer";
import {ICourse} from "../actions/courseActions";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import {Store} from "react-redux";

export function configureStore(initalState: Array<ICourse>): Store<Array<ICourse>>{
    return createStore(rootReducer, initalState, applyMiddleware(reduxImmutableStateInvariant()));
}