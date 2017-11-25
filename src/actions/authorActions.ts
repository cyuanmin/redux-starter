import {IAuthor} from "../models/author";
import {AuthorTypeKeys, ILoadAuthorsSuccessAction} from "./authorTypes";
import authorApi from "../api/mockAuthorApi";
import {BeginAjaxCall} from "../actions/ajaxStatusActions";

// Action definitions for authors

// Action to load an author
export function LoadAuthorSuccess(authors: Array<IAuthor>): ILoadAuthorsSuccessAction {
    return {
        type: AuthorTypeKeys.LOAD_AUTHORS_SUCCESS,
        authors: authors
    };
}

// Thunk function to load all authors
export function loadAuthors(): (dispatch: any) => Promise<void>
{
    return function(dispatch: any): Promise<void>{
        dispatch(BeginAjaxCall());
        return authorApi.getAllAuthors().then((authors: Array<IAuthor>) => {
            dispatch(LoadAuthorSuccess(authors));
        });
    };
}