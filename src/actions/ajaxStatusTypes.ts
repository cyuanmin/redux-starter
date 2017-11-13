export enum AjaxTypeKeys{
    BEGIN_AJAX_CALL = "BEGIN_AJAX_CALL",
    AJAX_CALL_FAILED = "AJAX_CALL_FAILED"
}

export interface IBeginAjaxCallAction {
    type: AjaxTypeKeys.BEGIN_AJAX_CALL;
}

export interface IAjaxCallFailedAction {
    type: AjaxTypeKeys.AJAX_CALL_FAILED;
}

export type AjaxActionTypes = IBeginAjaxCallAction | IAjaxCallFailedAction;