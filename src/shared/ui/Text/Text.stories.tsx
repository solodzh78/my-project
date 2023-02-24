import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Text>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet illo quidem quaerat consectetur odio ea, alias nihil exercitationem commodi nam quo deserunt ducimus sed non! Harum facere animi similique.',
};

export const PrimaryOnlyTitle = Template.bind({});
PrimaryOnlyTitle.args = {
  title: 'Title',
};

export const PrimaryOnlyText = Template.bind({});
PrimaryOnlyText.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet illo quidem quaerat consectetur odio ea, alias nihil exercitationem commodi nam quo deserunt ducimus sed non! Harum facere animi similique.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet illo quidem quaerat consectetur odio ea, alias nihil exercitationem commodi nam quo deserunt ducimus sed non! Harum facere animi similique.',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];

export const PrimaryOnlyTitleDark = Template.bind({});
PrimaryOnlyTitleDark.args = {
  title: 'Title',
};
PrimaryOnlyTitleDark.decorators = [ThemeDecorator('dark')];

export const PrimaryOnlyTextDark = Template.bind({});
PrimaryOnlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet illo quidem quaerat consectetur odio ea, alias nihil exercitationem commodi nam quo deserunt ducimus sed non! Harum facere animi similique.',
};
PrimaryOnlyTextDark.decorators = [ThemeDecorator('dark')];

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet illo quidem quaerat consectetur odio ea, alias nihil exercitationem commodi nam quo deserunt ducimus sed non! Harum facere animi similique.',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  variant: 'error',
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet illo quidem quaerat consectetur odio ea, alias nihil exercitationem commodi nam quo deserunt ducimus sed non! Harum facere animi similique.',
};
ErrorDark.decorators = [ThemeDecorator('dark')];
