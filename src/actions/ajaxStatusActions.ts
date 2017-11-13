import {AjaxTypeKeys, IBeginAjaxCallAction} from "./ajaxStatusTypes";

export function BeginAjaxCall(): IBeginAjaxCallAction {
    return {
        type: AjaxTypeKeys.BEGIN_AJAX_CALL
    };
}