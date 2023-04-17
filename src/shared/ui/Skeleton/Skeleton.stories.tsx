import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Skeleton>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Rect = Template.bind({});
Rect.args = {
  width: '100%',
  height: 200,
};
Rect.decorators = [StoreDecorator({})];

export const RectDark = Template.bind({});
RectDark.args = {
  width: '100%',
  height: 200,
};
RectDark.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const Circle = Template.bind({});
Circle.args = {
  width: 100,
  height: 100,
  border: '50%',
};

export const CircleDark = Template.bind({});
CircleDark.args = {
  width: 100,
  height: 100,
  border: '50%',
};
CircleDark.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
