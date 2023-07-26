import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { mockedArticle } from 'shared/mocked/mockedArticle';
import { Article } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

const articleData: Article = mockedArticle as Article;

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  decorators: [StoreDecorator({
    article: {
      articleData,
    },
  })],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticleDetails>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {
};

export const DarkNoAuth = Template.bind({});
DarkNoAuth.args = {
};
DarkNoAuth.decorators = [ThemeDecorator('dark')];

export const LightLoading = Template.bind({});
LightLoading.args = {
};
LightLoading.decorators = [StoreDecorator({ article: { isLoading: true } })];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
};
DarkLoading.decorators = [ThemeDecorator('dark'), StoreDecorator({ article: { isLoading: true } })];

export const LightError = Template.bind({});
LightError.args = {
};
LightError.decorators = [StoreDecorator({ article: { error: 'error' } })];

export const DarkError = Template.bind({});
DarkError.args = {
};
DarkError.decorators = [ThemeDecorator('dark'), StoreDecorator({ article: { error: 'error' } })];
