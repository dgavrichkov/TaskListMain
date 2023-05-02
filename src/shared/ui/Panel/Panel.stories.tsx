import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Panel } from './Panel';
import { Spacer } from '../Spacer';

export default {
  title: 'Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = () => (
  <Panel>
    <h3>Content title</h3>
    <Spacer />
    <p>Content text</p>
  </Panel>
);

export const Default = Template.bind({});
