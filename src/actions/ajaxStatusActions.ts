import {AjaxTypeKeys, IBeginAjaxCallAction, IAjaxCallFailedAction} from "./ajaxStatusTypes";

// Action definition for Ajax calls
// Action to begin an ajax call
export function BeginAjaxCall(): IBeginAjaxCallAction {
    return {
        type: AjaxTypeKeys.BEGIN_AJAX_CALL
    };
}

// Action to fail an ajax call
export function AjaxCallFailed(): IAjaxCallFailedAction {
    return {
        type: AjaxTypeKeys.AJAX_CALL_FAILED
    };
}