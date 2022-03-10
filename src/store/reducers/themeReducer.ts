import { ThemeAction } from "../../types/ThemeAction";
import { ThemeActionTypes } from "../../types/ThemeActionTypes";

const initialThemeState = "dark";

export const themeReducer = (state = initialThemeState, action: ThemeAction) => {
    switch(action.type) {
        case ThemeActionTypes.SWITCH_THEMES:
            return action.payload
        default:
            return state
    }
}