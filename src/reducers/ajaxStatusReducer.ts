import { Action } from "redux";
import { AjaxActionTypes, AjaxTypeKeys } from "../actions/ajaxStatusTypes";
import { defaultAjaxCalls } from "../stores/initialStates";

function actionTypeEndsInSuccess(type: string): boolean {
    return type.substring(type.length - 8) === "_SUCCESS";
}

export function ajaxStatusReducer(state: number = defaultAjaxCalls, action: AjaxActionTypes): number {
    if (action.type === AjaxTypeKeys.BEGIN_AJAX_CALL) {
        return state + 1;
    }
    else if (actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}