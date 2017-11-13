import {AjaxTypeKeys, IBeginAjaxCallAction, IAjaxCallFailedAction} from "./ajaxStatusTypes";

export function BeginAjaxCall(): IBeginAjaxCallAction {
    return {
        type: AjaxTypeKeys.BEGIN_AJAX_CALL
    };
}


export function AjaxCallFailed(): IAjaxCallFailedAction {
    return {
        type: AjaxTypeKeys.AJAX_CALL_FAILED
    };
}