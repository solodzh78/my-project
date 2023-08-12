import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { mockedComments } from 'shared/mocked/mockedComment';
import { CommentList } from './CommentList';

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
LightNormal.args = { comments: mockedComments(3) };
LightNormal.decorators = [StoreDecorator({})];

export const DarkNormal = Template.bind({});
DarkNormal.args = { comments: mockedComments(3) };
DarkNormal.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightLoading = Template.bind({});
LightLoading.args = { comments: mockedComments(3), isLoading: true };
LightLoading.decorators = [StoreDecorator({ user: { authData: {} } })];

export const DarkLoading = Template.bind({});
DarkLoading.args = { comments: mockedComments(3), isLoading: true };
DarkLoading.decorators = [ThemeDecorator('dark'), StoreDecorator({ user: { authData: {} } })];
