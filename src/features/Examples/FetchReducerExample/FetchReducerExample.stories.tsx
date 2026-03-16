import type { Meta, StoryObj } from '@storybook/react-vite';
import { FetchReducer } from './FetchReducerExample';

const App = () => {
  return (
    <div>
      <FetchReducer />
    </div>
  );
};

const meta: Meta<typeof App> = {
  title: 'Examples/FetchReducerExample/FetchReducer',
  component: App,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof App>;

export const Empty: Story = {
  render: () => {
    return <App />;
  },
};
