import { Button } from "./Button";

export default {
  title: "Ui-View/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

const props = {
  disabled: false,
  onClick: () => {
    console.log("Click");
  },
};

export const BaseButton = Template.bind({});
BaseButton.args = {
  ...props,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  ...props,
  disabled: true,
};
