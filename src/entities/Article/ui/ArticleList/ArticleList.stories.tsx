import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { mockedArticles } from 'shared/mocked/mockedArticle';
import { Article, VIEW } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const articles = mockedArticles as (n: number) => Article[];

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
} as unknown as ComponentMeta<typeof ArticleList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const LightListLoading = Template.bind({});
LightListLoading.args = {
  articles: [],
  isLoading: true,
  view: VIEW.LIST,
};
LightListLoading.decorators = [StoreDecorator({})];

export const DarkListLoading = Template.bind({});
DarkListLoading.args = {
  articles: [],
  isLoading: true,
  view: VIEW.LIST,
};
DarkListLoading.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightList = Template.bind({});
LightList.args = {
  articles: articles(3),
  view: VIEW.LIST,
  virtualized: false,
};
LightList.decorators = [StoreDecorator({})];

export const DarkList = Template.bind({});
DarkList.args = {
  articles: articles(3),
  view: VIEW.LIST,
  virtualized: false,
};
DarkList.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightGridLoading = Template.bind({});
LightGridLoading.args = {
  articles: [],
  isLoading: true,
  view: VIEW.GRID,
};
LightGridLoading.decorators = [StoreDecorator({})];

export const DarkGridLoading = Template.bind({});
DarkGridLoading.args = {
  articles: [],
  isLoading: true,
  view: VIEW.GRID,
};
DarkGridLoading.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightGrid = Template.bind({});
LightGrid.args = {
  articles: articles(9),
  view: VIEW.GRID,
  virtualized: false,
};
LightGrid.decorators = [StoreDecorator({})];

export const DarkGrid = Template.bind({});
DarkGrid.args = {
  articles: articles(9),
  view: VIEW.GRID,
  virtualized: false,
};
DarkGrid.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
