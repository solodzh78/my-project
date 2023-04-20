import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { ArticleComments } from './ArticleComments';

const articleComments = {
  isLoading: false,
  error: undefined,
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' },
    },
    2: {
      id: '2',
      text: 'bye bye world',
      user: { id: '2', username: 'Petya' },
    },
  },
};

export default {
  title: 'widgets/ArticleComments',
  component: ArticleComments,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticleComments>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const LightNormal = Template.bind({});
LightNormal.args = {};
LightNormal.decorators = [StoreDecorator({ articleComments })];

export const DarkNormal = Template.bind({});
DarkNormal.args = {
};
DarkNormal.decorators = [ThemeDecorator('dark'), StoreDecorator({ articleComments })];

export const LightNoComments = Template.bind({});
LightNoComments.args = {
};
LightNoComments.decorators = [StoreDecorator({})];

export const DarkNoComments = Template.bind({});
DarkNoComments.args = {
};
DarkNoComments.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightLoading = Template.bind({});
LightLoading.args = {
};
LightLoading.decorators = [StoreDecorator({
  articleComments: {
    isLoading: true,
    ids: [],
    entities: {},
  },
})];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
};
DarkLoading.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({
    articleComments: {
      isLoading: true,
      ids: [],
      entities: {},
    },
  })];
