import { Action } from "redux";
import { AjaxActionTypes, AjaxTypeKeys } from "../actions/ajaxStatusTypes";
import { defaultAjaxCalls } from "../stores/initialStates";

function actionTypeEndsInSuccess(type: string): boolean {
    return type.substring(type.length - 8) === "_SUCCESS";
}

export function ajaxStatusReducer(state: number = defaultAjaxCalls, action: any): number {
    if (action.type === AjaxTypeKeys.BEGIN_AJAX_CALL) {
        return state + 1;
    }
    else if (action.type === AjaxTypeKeys.AJAX_CALL_FAILED){
        return state - 1;
    }
    else if (actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}