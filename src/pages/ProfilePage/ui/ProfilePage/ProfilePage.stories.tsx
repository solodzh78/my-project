import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { ProfilePage } from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator(
    {
      profile: {
        isLoading: false,
        readOnly: true,
        error: undefined,
        data: {
          firstName: 'Sergei',
          lastName: 'Solodzhuk',
          username: 'admin',
          city: 'Kaliningrad',
          currency: 'EUR',
          country: 'RUSSIA',
          age: 44,
        },
      },
      user: {
        authData: {},
      },
    },
  ),
  ],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ProfilePage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args as {}} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator('dark')];
