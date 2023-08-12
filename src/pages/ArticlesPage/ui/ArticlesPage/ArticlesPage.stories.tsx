import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { mockedArticles } from 'shared/mocked/mockedArticle';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ArticlesPage } from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/articles?_expand=user&_page=2&_limit=9&_sort=createdAt&_order=asc&q=`,
        method: 'GET',
        status: 200,
        response: mockedArticles(9),
      },
    ],
  },
  decorators: [
    StoreDecorator({
      articlesPage: {
        view: 'list',
      },
    }),
  ],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticlesPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args as {}} />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [
  StoreDecorator({
    articlesPage: {
      view: 'list',
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator('dark')];
