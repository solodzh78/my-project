import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  args: {
    isOpen: true,
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof LoginModal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [
  StoreDecorator({ loginForm: { username: 'user', password: 'pass' } }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ loginForm: { username: 'user', password: 'pass' } }),
];

export const PrimaryError = Template.bind({});
PrimaryError.args = {
};
PrimaryError.decorators = [
  StoreDecorator({ loginForm: { username: 'user', password: 'pass', error: 'ERROR' } }),
];

export const PrimaryDarkError = Template.bind({});
PrimaryDarkError.args = {
};
PrimaryDarkError.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ loginForm: { username: 'user', password: 'pass', error: 'ERROR' } }),
];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
};
PrimaryLoading.decorators = [
  StoreDecorator({ loginForm: { username: 'user', password: 'pass', isLoading: true } }),
];

export const PrimaryDarkLoading = Template.bind({});
PrimaryDarkLoading.args = {
};
PrimaryDarkLoading.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ loginForm: { username: 'user', password: 'pass', isLoading: true } }),
];
