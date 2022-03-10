import { Dispatch } from "redux";
import { RootState } from "../reducers";

export function toggleThemeAction() {

    return (dispatch: Dispatch, getState: () => RootState) => {
        let theme = getState().theme;
        if (theme === "light") {
            theme = "dark";
        } else {
            theme = "light";
        }
        
        dispatch({type: "SWITCH_THEME", payload: theme})
    }
}