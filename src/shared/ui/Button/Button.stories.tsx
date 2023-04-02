import React, { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from 'styled-components';
import { THEMES } from '../../../app/styles/themes';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: ['light', 'dark'],
      },
      defaultValue: 'dark',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}
Default.decorators = [
  (story, ctx) => {
    const theme = ctx.args.theme;
    return (
      <ThemeProvider theme={THEMES[theme]}>{story()}</ThemeProvider>
    )
  }
]
