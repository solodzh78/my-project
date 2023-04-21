import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { mockedArticle } from 'shared/mocked/mockedArticle';
import { ArticleListItem } from './ArticleListItem';
import { Article, VIEW } from '../../model/types/article';

const article = mockedArticle as Article;

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticleListItem>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const LightList = Template.bind({});
LightList.args = {
  article,
  view: VIEW.LIST,
};
LightList.decorators = [StoreDecorator({})];

export const DarkList = Template.bind({});
DarkList.args = {
  article,
  view: VIEW.LIST,
};
DarkList.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightTile = Template.bind({});
LightTile.args = {
  article,
  view: VIEW.TILE,
};
LightTile.decorators = [StoreDecorator({})];

export const DarkTile = Template.bind({});
DarkTile.args = {
  article,
  view: VIEW.TILE,
};
DarkTile.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
