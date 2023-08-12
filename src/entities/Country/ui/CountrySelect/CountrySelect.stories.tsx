import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  args: {
    label: 'выберите страну',
    value: 'RUSSIA',
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [(Story) => <div style={{ width: '100%', display: 'flex', padding: '200px' }}><Story /></div>];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [
  (Story) => <div style={{ width: '100%', display: 'flex', padding: '200px' }}><Story /></div>,
  ThemeDecorator('dark'),
];
