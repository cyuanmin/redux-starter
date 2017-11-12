import {IAuthor} from "../models/author";
import {AuthorTypeKeys, ILoadAuthorsSuccessAction} from "./authorTypes";

export function LoadAuthorSuccess(authors: Array<IAuthor>): ILoadAuthorsSuccessAction {
    return {
        type: AuthorTypeKeys.LOAD_AUTHORS_SUCCESS,
        authors: authors
    };
}