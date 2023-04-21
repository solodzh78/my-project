import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
  title: 'shared/Card',
  component: Card,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const LightNormal = Template.bind({});
LightNormal.args = {
  children: <Text title="Title" text="text text text" />,
};
LightNormal.decorators = [StoreDecorator({})];

export const DarkNormal = Template.bind({});
DarkNormal.args = {
  children: <Text title="Title" text="text text text" />,
};
DarkNormal.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
