import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Page } from './Page';

export default {
  title: 'widgets/Page',
  component: Page,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {
};
LightNoAuth.decorators = [StoreDecorator({})];

export const DarkNoAuth = Template.bind({});
DarkNoAuth.args = {
};
DarkNoAuth.decorators = [ThemeDecorator('dark'), StoreDecorator({})];

export const LightAuth = Template.bind({});
LightAuth.args = {
};
LightAuth.decorators = [StoreDecorator({ user: { authData: {} } })];

export const DarkAuth = Template.bind({});
DarkAuth.args = {
};
DarkAuth.decorators = [ThemeDecorator('dark'), StoreDecorator({ user: { authData: {} } })];
