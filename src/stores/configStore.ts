import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/rootReducer";
import {ICourse} from "../models/course";
import {IAuthor} from "../models/author";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import {Store} from "react-redux";
import thunk from "redux-thunk";

export interface IAppState{
    courses: Array<ICourse>;
    authors: Array<IAuthor>;
    ajaxCallsInProgress: number;
}

export function configureStore(initalState: IAppState): Store<IAppState>{
    return createStore(rootReducer, initalState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}