import {IAuthor} from "../models/author";

// Type definitions for authors
export enum AuthorTypeKeys{
    LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS"
}

export interface ILoadAuthorsSuccessAction {
    type: AuthorTypeKeys.LOAD_AUTHORS_SUCCESS;
    authors: Array<IAuthor>;
}

export type AuthorActionTypes = ILoadAuthorsSuccessAction;