import { FilterActionTypes } from "./FilterActionTypes";

export type FilterAction = {
  type:
    | FilterActionTypes.CHANGE_TASKS_FILTER
    | FilterActionTypes.CHANGE_NOTES_FILTER;
  payload: string;
};
