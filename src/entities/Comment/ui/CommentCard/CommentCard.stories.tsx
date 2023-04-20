import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';

const comment = {
  id: '1',
  text: 'hello world',
  user: { id: '1', username: 'Vasya' },
};

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof CommentCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const LightNormal = Template.bind({});
LightNormal.args = { comment };
LightNormal.decorators = [StoreDecorator({})];

export const DarkNormal = Template.bind({});
DarkNormal.args = { comment };
DarkNormal.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightLoading = Template.bind({});
LightLoading.args = { comment, isLoading: true };
LightLoading.decorators = [StoreDecorator({})];

export const DarkLoading = Template.bind({});
DarkLoading.args = { comment, isLoading: true };
DarkLoading.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
