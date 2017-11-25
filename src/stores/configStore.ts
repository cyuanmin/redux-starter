import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/rootReducer";
import {ICourse} from "../models/course";
import {IAuthor} from "../models/author";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import {Store} from "react-redux";
import thunk from "redux-thunk";

// All global states for the React application. 
export interface IAppState{
    courses: Array<ICourse>; // All courses
    authors: Array<IAuthor>; // All courses
    ajaxCallsInProgress: number; // Number of active ajax calls
}

// Using redux's createStore function to initialize a redux store. We can apply middleware like
// redux-thunk and reduxImmutableStateInvariant to handle promise-based requests or to track errors
export function configureStore(initalState: IAppState): Store<IAppState>{
    return createStore(rootReducer, initalState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}