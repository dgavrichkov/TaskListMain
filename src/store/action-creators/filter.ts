import { Dispatch } from "redux";
import { FilterActionTypes } from "../../types/FilterActionTypes";
import { RootState } from "../reducers";

export function filterChangeAction(filter: string) {
    return (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({type: FilterActionTypes.CHANGE_FILTER, payload: filter})
    }
}