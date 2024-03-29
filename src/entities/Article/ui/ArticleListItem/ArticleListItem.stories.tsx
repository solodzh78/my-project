import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { mockedArticle } from 'shared/mocked/mockedArticle';
import { ArticleListItem } from './ArticleListItem';
import { Article } from '../../model/types/article';
import { VIEW } from '../../model/const/article';

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

export const LightGrid = Template.bind({});
LightGrid.args = {
  article,
  view: VIEW.GRID,
};
LightGrid.decorators = [StoreDecorator({})];

export const DarkGrid = Template.bind({});
DarkGrid.args = {
  article,
  view: VIEW.GRID,
};
DarkGrid.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
