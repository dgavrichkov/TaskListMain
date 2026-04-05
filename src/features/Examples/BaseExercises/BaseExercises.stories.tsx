import { Button } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

// Кнопка при нажатии показывает/скрывает текст
const ButtonShowingText = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleText = () => {
    setIsActive((active) => !active);
  };

  return (
    <div>
      <Button type="button" onClick={handleToggleText}>
        {isActive ? 'Hide' : 'Show'}
      </Button>
      {isActive && <p>Some important information</p>}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ButtonShowingText />
    </div>
  );
};

const meta: Meta<typeof App> = {
  title: 'Examples/BaseExercises/BaseExercises',
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
