

const initialThemeState = "dark";

export const themeReducer = (state = initialThemeState, action: any) => {
    switch(action.type) {
        case "SWITCH_THEME":
            return state
        default:
            return state
    }
}