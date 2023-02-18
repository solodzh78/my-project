import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: { to: '/' },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof AppLink>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: 'Link Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Link Text',
  theme: 'secondary',
};
// Secondary.decorators = [ThemeDecorator('dark')];

export const Red = Template.bind({});
Red.args = {
  children: 'Link Text',
  theme: 'red',
};
// Red.decorators = [ThemeDecorator('dark')];
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: 'primary',
  children: 'Link Text',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Link Text',
  theme: 'secondary',
};
SecondaryDark.decorators = [ThemeDecorator('dark')];

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Link Text',
  theme: 'red',
};
RedDark.decorators = [ThemeDecorator('dark')];
