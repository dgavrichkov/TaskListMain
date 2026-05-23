import type { Meta, StoryObj } from '@storybook/react-vite';
import { VirtualizationExample } from './VirtualizationExample';

const App = () => {
  return (
    <div>
      <VirtualizationExample />
    </div>
  );
};

const meta: Meta<typeof App> = {
  title: 'Examples/VirtualizationExample/VirtualizationExample',
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
