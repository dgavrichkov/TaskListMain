import { FilterAction } from "../../types/FilterAction";
import { FilterActionTypes } from "../../types/FilterActionTypes";

const initialFilterState = "all";

export const notesFilterReducer = (
  state = initialFilterState,
  action: FilterAction
) => {
  switch (action.type) {
    case FilterActionTypes.CHANGE_NOTES_FILTER:
      return action.payload;
    default:
      return state;
  }
};
