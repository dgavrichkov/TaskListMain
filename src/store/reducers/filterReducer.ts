import { FilterAction } from "../../types/FilterAction";
import { FilterActionTypes } from "../../types/FilterActionTypes";

const initialThemeState = "all";

export const filterReducer = (state = initialThemeState, action: FilterAction) => {
    switch(action.type) {
        case FilterActionTypes.CHANGE_FILTER:
            return action.payload
        default:
            return state
    }
}