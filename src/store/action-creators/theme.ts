import { Dispatch } from "redux";

export function toggleThemeAction() {
    console.log("toggle theme action");
    return (dispatch: Dispatch, getState: any) => {
        console.log(getState());
        
        dispatch({type: "SWITCH_THEME", payload: ""})
    }
}