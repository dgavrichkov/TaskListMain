import { State } from "../../types/types"

export const getTasksFromState = (state: State) => {
    return state.tasks.idList.map((id: string) => state.tasks.data[id])
}