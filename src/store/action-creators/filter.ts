import { Dispatch } from "redux";
import { FilterAction } from "../../types/FilterAction";
import { FilterActionTypes } from "../../types/FilterActionTypes";

export function tasksFilterChangeAction(filter: string) {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({ type: FilterActionTypes.CHANGE_TASKS_FILTER, payload: filter });
  };
}
