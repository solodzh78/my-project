import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { CommentList } from './CommentList';

const comments = [
  {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' },
  },
  {
    id: '2',
    text: 'bye bye world',
    user: { id: '2', username: 'Petya' },
  },
];

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof CommentList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const LightNormal = Template.bind({});
LightNormal.args = { comments };
LightNormal.decorators = [StoreDecorator({})];

export const DarkNormal = Template.bind({});
DarkNormal.args = { comments };
DarkNormal.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightLoading = Template.bind({});
LightLoading.args = { comments, isLoading: true };
LightLoading.decorators = [StoreDecorator({ user: { authData: {} } })];

export const DarkLoading = Template.bind({});
DarkLoading.args = { comments, isLoading: true };
DarkLoading.decorators = [ThemeDecorator('dark'), StoreDecorator({ user: { authData: {} } })];
