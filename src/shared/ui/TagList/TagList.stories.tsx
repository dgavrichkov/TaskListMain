import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Panel } from "../Panel";
import { TagList } from './TagList';

export default {
  title: 'Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>

const tags = [
  { id: "1", tagname: "tag 1" },
  { id: "2", tagname: "tag 2" },
  { id: "3", tagname: "tag 3" },
]

const Template: ComponentStory<typeof Panel> = () => (
  <Panel>
    <TagList tags={tags} onClickAction={() => console.log('Tag click')} />
  </Panel>
);

export const Default = Template.bind({})
