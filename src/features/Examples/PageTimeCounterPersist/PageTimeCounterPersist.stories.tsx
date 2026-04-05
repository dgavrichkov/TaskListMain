import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageTimeCounterPersist } from './PageTimeCounterPersist';

const App = () => {
  return (
    <div>
      <PageTimeCounterPersist />
    </div>
  );
};

const meta: Meta<typeof App> = {
  title: 'Examples/PageTimerPersist/PageTimerPersist',
  component: App,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Реализовать страницу с счетчиком, который показывает, сколько времени пользователь находится на странице в секундах.

Требования:
- Счетчик увеличивается каждую секунду
- При уходе со страницы и возвращении счетчик продолжает отсчет
- Состояние сохраняется (например, через localStorage)
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof App>;

export const Empty: Story = {
  render: () => {
    return <App />;
  },
};
