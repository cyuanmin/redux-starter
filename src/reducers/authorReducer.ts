import {Action} from "redux";
import {IAuthor} from "../models/author";
import {AuthorActionTypes, AuthorTypeKeys} from "../actions/authorTypes";
import {defaultAuthors} from "../stores/initialStates";

export function authorReducer(state: Array<IAuthor> = defaultAuthors, action: AuthorActionTypes): Array<IAuthor>{
    switch (action.type) {
        case AuthorTypeKeys.LOAD_AUTHORS_SUCCESS: {
            return action.authors;
        }
        
        default:
            return state;
    }
}