import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { NavBar } from './NavBar';

export default {
  title: 'widgets/NavBar',
  component: NavBar,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof NavBar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [
  StoreDecorator({ user: { authData: undefined } }),
];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ user: { authData: undefined } }),
];

export const LightAuthorized = Template.bind({});
LightAuthorized.args = {
};
LightAuthorized.decorators = [
  StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } }),
];

export const DarkAuthorized = Template.bind({});
DarkAuthorized.args = {
};
DarkAuthorized.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } }),
];
