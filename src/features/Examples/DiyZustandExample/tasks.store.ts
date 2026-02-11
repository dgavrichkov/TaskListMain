import { createStoreDiy } from '@/shared/lib/CustomZustand';

type Task = {
  text: string;
  id: number;
};

type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
};

export const taskStore = createStoreDiy<TaskStore>((set, get) => ({
  tasks: [],
  addTask: (text: string) => {
    const { tasks } = get();
    set({
      tasks: [...tasks, { text, id: tasks.length + 1 }],
    });
  },
}));
