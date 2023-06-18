import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
// import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Tabs>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {
  tabs: [
    {
      value: 'tab 1',
      content: 'content tab 1',
    },
    {
      value: 'tab 2',
      content: 'content tab 2',
    },
    {
      value: 'tab 3',
      content: 'content tab 3',
    },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
};
// Light.decorators = [StoreDecorator({})];

// export const DarkNoAuth = Template.bind({});
// DarkNoAuth.args = {
// };
// DarkNoAuth.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

// export const LightAuth = Template.bind({});
// LightAuth.args = {
// };
// LightAuth.decorators = [StoreDecorator({ user: { authData: {} } })];

// export const DarkAuth = Template.bind({});
// DarkAuth.args = {
// };
// DarkAuth.decorators = [ThemeDecorator('dark'), StoreDecorator({ user: { authData: {} } })];
