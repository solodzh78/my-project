import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { mockedArticle } from 'shared/mocked/mockedArticle';
import { Article, VIEW } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const article = mockedArticle as Article;
const articles = (n: number) => (
  new Array(n)
    .fill(0)
    .map((elem, index) => ({
      ...article,
      id: String(index + 1),
    }))
);

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticleList>;

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
};
LightList.decorators = [StoreDecorator({})];

export const DarkList = Template.bind({});
DarkList.args = {
  articles: articles(3),
  view: VIEW.LIST,
};
DarkList.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightTileLoading = Template.bind({});
LightTileLoading.args = {
  articles: [],
  isLoading: true,
  view: VIEW.TILE,
};
LightTileLoading.decorators = [StoreDecorator({})];

export const DarkTileLoading = Template.bind({});
DarkTileLoading.args = {
  articles: [],
  isLoading: true,
  view: VIEW.TILE,
};
DarkTileLoading.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightTile = Template.bind({});
LightTile.args = {
  articles: articles(9),
  view: VIEW.TILE,
};
LightTile.decorators = [StoreDecorator({})];

export const DarkTile = Template.bind({});
DarkTile.args = {
  articles: articles(9),
  view: VIEW.TILE,
};
DarkTile.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
