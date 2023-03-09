import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
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
} as ComponentMeta<typeof EditableProfileCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args as {}} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator('dark')];

export const ErrorLight = Template.bind({});
ErrorLight.args = {
};
ErrorLight.decorators = [StoreDecorator({ profile: { error: 'error' } })];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
};
ErrorDark.decorators = [ThemeDecorator('dark'), StoreDecorator({ profile: { error: 'error' } })];

export const LoadingLight = Template.bind({});
LoadingLight.args = {
};
LoadingLight.decorators = [StoreDecorator({ profile: { isLoading: true } })];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
};
LoadingDark.decorators = [ThemeDecorator('dark'), StoreDecorator({ profile: { isLoading: true } })];
