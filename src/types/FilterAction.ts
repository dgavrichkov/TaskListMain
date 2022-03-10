import { FilterActionTypes } from "./FilterActionTypes";

export type FilterAction = {
    type: FilterActionTypes.CHANGE_FILTER,
    payload: "string"
}