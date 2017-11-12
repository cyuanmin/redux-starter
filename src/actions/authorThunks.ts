import authorApi from "../api/mockAuthorApi";
import {LoadAuthorSuccess} from "./authorActions";
import {IAuthor} from "../models/author";

export function loadAuthors(): (dispatch: any) => Promise<void>
{
    return function(dispatch: any): Promise<void>{
        return authorApi.getAllAuthors().then((authors: Array<IAuthor>) => {
            dispatch(LoadAuthorSuccess(authors));
        });
    };
}