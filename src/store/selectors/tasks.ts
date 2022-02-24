import { State } from "../../types/State"

export const getTasksFromState = (state: State) => {
    return state.tasks.idList.map((id: string) => state.tasks.data[id])
}