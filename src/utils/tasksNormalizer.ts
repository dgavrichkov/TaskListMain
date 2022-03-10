import { Task } from "../types/Task";

export const tasksNormalizer = function(tasks: Task[]) {
    return {
        data: Object.fromEntries(tasks.map(task => [task.id, task])),
        idList: tasks.map(task => task.id)
    };
}