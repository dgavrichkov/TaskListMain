export type TTask = {
  id: string;
  name: string;
  category: string;
  done: boolean;
};

export type TTaskNew = Pick<TTask, "name" | "category">;

export type TTasksState = {
  data: {
    [name: string]: TTask;
  };
  idList: string[];
};
