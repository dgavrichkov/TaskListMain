import type { Meta, StoryObj } from '@storybook/react-vite';
import { IntervalTimerExample } from './IntervalTimerExample';

const App = () => {
  return (
    <div>
      <IntervalTimerExample />
    </div>
  );
};

const meta: Meta<typeof App> = {
  title: 'Examples/IntervalTimer/IntervalTimer',
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
