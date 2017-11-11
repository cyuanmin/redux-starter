import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/rootReducer";
import {ICourse} from "../actions/courseTypes";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import {Store} from "react-redux";

export interface IAppState{
    courses: Array<ICourse>;
}

export function configureStore(initalState: IAppState): Store<IAppState>{
    return createStore(rootReducer, initalState, applyMiddleware(reduxImmutableStateInvariant()));
}