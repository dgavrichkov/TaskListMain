import { RootState } from "../reducers"

export const getTasksFromState = (state: RootState) => {
    return state.tasks.idList.map((id: string) => state.tasks.data[id])
}