import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator('dark')];
