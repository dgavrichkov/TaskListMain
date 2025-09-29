import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { TPopoverAPI } from './types';
import { useRef } from 'react';
import { usePopover } from './hooks/usePopover';
import { Button } from '../Button';
import { PopoverProvider, TPopoverOpenOptions } from './PopoverProvider';
import { StyleProvider } from '@/app/providers/StyleProvider';
import { Card } from '../Card';

const PopoverContent = ({ onClose }: TPopoverAPI) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <Card className="p-4" style={{ minWidth: 200 }}>
      <Button onClick={handleClick}>A1</Button>
      <Button onClick={handleClick}>A2</Button>
      <Button onClick={handleClick}>A3</Button>
    </Card>
  );
};

type OpenPopoverOptions = Pick<TPopoverOpenOptions, 'shouldStickToAnchor'>;

const Content = ({ shouldStickToAnchor }: OpenPopoverOptions) => {
  const btnRef = useRef(null);
  const popoverControl = usePopover();

  return (
    <div>
      <Button
        ref={btnRef}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          popoverControl.open({
            clientX: e.clientX,
            clientY: e.clientY,
            anchorEl: btnRef.current || target,
            renderer: PopoverContent,
            shouldStickToAnchor,
          });
        }}
      >
        Click
      </Button>
    </div>
  );
};

const WithLocalDecorator: Decorator = (Story) => (
  <StyleProvider>
    <div style={{ padding: 20 }}>
      <Story />
    </div>
  </StyleProvider>
);

type Story = StoryObj<typeof Content>;

const meta: Meta = {
  title: 'UI/Popover/Provider',
  component: PopoverProvider,
  decorators: [WithLocalDecorator],
  argTypes: {
    shouldStickToAnchor: { control: 'boolean' },
  },
  args: {
    // сюда — дефолтные пропсы провайдера, если есть
    shouldStickToAnchor: true,
  },
};

export default meta;

export const WithButtons: Story = {
  render: (args) => (
    <PopoverProvider>
      <Content {...args} />
    </PopoverProvider>
  ),
};
