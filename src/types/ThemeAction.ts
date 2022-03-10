import { ThemeActionTypes } from "./ThemeActionTypes";

export type ThemeAction = {
    type: ThemeActionTypes.SWITCH_THEMES,
    payload: string
}