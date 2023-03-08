import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Выберите',
  value: 'Text123',
  options: [
    {
      value: 'Text123',
      selectOption: 'Text123 selectOption',
    },
    {
      value: 'Text1234',
      selectOption: 'Text1234 selectOption',
    },
  ],
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  label: 'Выберите',
  value: 'Text123',
  options: [
    {
      value: 'Text123',
      selectOption: 'Text123 selectOption',
    },
    {
      value: 'Text1234',
      selectOption: 'Text1234 selectOption',
    },
  ],
};
PrimaryDark.decorators = [ThemeDecorator('dark')];
