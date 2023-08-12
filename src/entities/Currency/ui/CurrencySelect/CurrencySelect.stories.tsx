import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  args: {
    label: 'выберите валюту',
    value: 'RUB',
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

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
