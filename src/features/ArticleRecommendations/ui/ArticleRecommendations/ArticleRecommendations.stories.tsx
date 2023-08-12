import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { mockedArticles } from 'shared/mocked/mockedArticle';
import { ArticleRecommendations } from './ArticleRecommendations';

export default {
  title: 'features/ArticleRecommendations',
  component: ArticleRecommendations,
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: mockedArticles(3),
      },
    ],
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticleRecommendations>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleRecommendations> = (args) => <ArticleRecommendations {...args} />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
