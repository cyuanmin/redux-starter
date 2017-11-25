import { Action } from "redux";
import { AjaxActionTypes, AjaxTypeKeys } from "../actions/ajaxStatusTypes";
import { defaultAjaxCalls } from "../stores/initialStates";

// We can identify whether an action is "success" action or not by looking at its ending characters
function actionTypeEndsInSuccess(type: string): boolean {
    return type.substring(type.length - 8) === "_SUCCESS";
}

export function ajaxStatusReducer(state: number = defaultAjaxCalls, action: any): number {
    if (action.type === AjaxTypeKeys.BEGIN_AJAX_CALL) {
        return state + 1; //Add reference count when ajax call is initiated
    }
    else if (action.type === AjaxTypeKeys.AJAX_CALL_FAILED){
        return state - 1; // Reduce reference count when ajax call failed
    }
    else if (actionTypeEndsInSuccess(action.type)) {
        return state - 1; // Reduce reference count when the call is completed
    }

    return state; // For unrecognized actions, we will not modify the application state, and will simply
    //return the existing state object.
}