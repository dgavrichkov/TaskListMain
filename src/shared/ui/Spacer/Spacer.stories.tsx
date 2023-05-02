import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacer } from './Spacer';

export default {
  title: 'Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = () => (
  <>
    <div>Content 1</div>
    <Spacer />
    <div>Content 2</div>
  </>
);

export const Default = Template.bind({});
