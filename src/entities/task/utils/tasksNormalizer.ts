import { TTask } from '../model/task.interface';

export const tasksNormalizer = function (tasks: TTask[]) {
  return {
    data: Object.fromEntries(tasks.map((task) => [task.id, task])),
    idList: tasks.map((task) => task.id),
  };
};
