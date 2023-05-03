import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'tag',
};

export const Selected = Template.bind({});
Selected.args = {
  children: 'selected',
  isActive: true,
};
