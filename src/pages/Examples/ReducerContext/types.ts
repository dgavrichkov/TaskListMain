export type TTask = {
  id: number;
  text: string;
  done: boolean;
};

export type Action = {
  id: number;
  type: string;
  payload: any;
};
