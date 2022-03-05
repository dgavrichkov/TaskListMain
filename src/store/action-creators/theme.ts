import { Dispatch } from "redux";

export function toggleThemeAction() {
    // console.log("toggle theme action");
    return (dispatch: Dispatch, getState: any) => {
        let theme = getState().theme;
        if (theme === "light") {
            theme = "dark";
        } else {
            theme = "light";
        }
        
        dispatch({type: "SWITCH_THEME", payload: theme})
    }
}