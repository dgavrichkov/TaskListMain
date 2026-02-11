import type { Meta, StoryObj } from '@storybook/react-vite';

import { App } from './DiyZustandStoreTodolist';
import { taskStore } from './tasks.store';

type TaskSeed = { id: number; text: string };

const seedTasks = (tasks?: TaskSeed[]) => {
  const initial = taskStore.getInitialState();
  taskStore.setState({
    tasks: tasks ?? initial.tasks,
  });
};

const meta: Meta<typeof App> = {
  title: 'Examples/DiyZustand/StoreTodolist',
  component: App,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof App>;

export const Empty: Story = {
  render: () => {
    seedTasks([]);
    return <App />;
  },
};

export const WithTasks: Story = {
  render: () => {
    seedTasks([
      { id: 1, text: 'Buy milk' },
      { id: 2, text: 'Write Storybook story' },
      { id: 3, text: 'Walk the dog' },
    ]);
    return <App />;
  },
};
