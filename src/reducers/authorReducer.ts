import {Action} from "redux";
import {IAuthor} from "../models/author";
import {AuthorActionTypes, AuthorTypeKeys} from "../actions/authorTypes";
import {defaultAuthors} from "../stores/initialStates";

// A reducer responsible for handling author-related actions. As a rule, we cannot modify existing state, and can
// only return copies of the existing state.
export function authorReducer(state: Array<IAuthor> = defaultAuthors, action: AuthorActionTypes): Array<IAuthor>{
    switch (action.type) {
        case AuthorTypeKeys.LOAD_AUTHORS_SUCCESS: {
            return action.authors; // Authors have been loaded. We will replace the original authors with the new list
        }
        
        default:
            return state; // For unrecognized actions, we will not modify the application state, and will simply
            //return the existing state object.
    }
}