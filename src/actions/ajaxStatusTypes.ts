export enum AjaxTypeKeys{
    BEGIN_AJAX_CALL = "BEGIN_AJAX_CALL"
}

export interface IBeginAjaxCallAction {
    type: AjaxTypeKeys.BEGIN_AJAX_CALL;
}

export type AjaxActionTypes = IBeginAjaxCallAction;