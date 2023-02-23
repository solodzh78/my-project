import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Text123',
  placeholder: 'Введите username',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: 'Text123',
  placeholder: 'Введите username',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];
