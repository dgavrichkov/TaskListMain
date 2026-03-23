import type { Meta, StoryObj } from '@storybook/react-vite';
import { RickAndMortySearch } from './RickAndMortySearch';

const App = () => {
  return (
    <div>
      <RickAndMortySearch />
    </div>
  );
};

const meta: Meta<typeof App> = {
  title: 'Examples/RickAndMortySearch/RickAndMortyCharacters',
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
