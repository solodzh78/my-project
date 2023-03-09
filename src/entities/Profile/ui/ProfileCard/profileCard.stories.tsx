import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { ProfileCard } from './profileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  // decorators: [StoreDecorator(
  //   {
  //     profile: {
  //       isLoading: false,
  //       readOnly: true,
  //       error: undefined,
  //       data: {
  //         firstName: 'Sergei',
  //         lastName: 'Solodzhuk',
  //         username: 'admin',
  //         city: 'Kaliningrad',
  //         currency: 'EUR',
  //         country: 'RUSSIA',
  //         age: 44,
  //       },
  //     },
  //     user: {
  //       authData: {},
  //     },
  //   },
  // ),
  // ],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args as {}} />;

export const Light = Template.bind({});
Light.args = {
  data: {
    firstName: 'Sergei',
    lastName: 'Solodzhuk',
    username: 'admin',
    city: 'Kaliningrad',
    currency: 'EUR',
    country: 'RUSSIA',
    age: 44,
  },
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    firstName: 'Sergei',
    lastName: 'Solodzhuk',
    username: 'admin',
    city: 'Kaliningrad',
    currency: 'EUR',
    country: 'RUSSIA',
    age: 44,
  },
};
Dark.decorators = [ThemeDecorator('dark')];
