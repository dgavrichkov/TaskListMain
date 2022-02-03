import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
// import { TasksState, TasksStateType } from "../types/types";

// получаем типизированный хук-селектор
// export const useTypedSelector: TypedUseSelectorHook<{
//   tasks: TasksStateType,
//   notes: any;
// }> = useSelector;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
