import { ITask } from "../types/types";

export const tasksNormalizer = function(tasks: ITask[]) {
    return {
        data: Object.fromEntries(tasks.map(task => [task.id, task])),
        idList: tasks.map(task => task.id)
    };
}