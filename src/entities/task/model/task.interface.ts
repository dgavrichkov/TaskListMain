export type TTask = {
  id: string;
  name: string;
  categoryID: string;
  done: boolean;
};

export type TTaskNew = Pick<TTask, 'name' | 'categoryID'>;

export type TTasksState = {
  data: {
    [name: string]: TTask;
  };
  idList: string[];
};
