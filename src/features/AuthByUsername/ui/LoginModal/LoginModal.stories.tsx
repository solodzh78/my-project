import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { LoginForm } from '../LoginForm/LoginForm';

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
  children: <LoginForm isOpen onSuccess={() => {}} />,
  isOpen: true,
};
Primary.decorators = [
  StoreDecorator({ loginForm: { username: 'user', password: 'pass' } }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: <LoginForm isOpen onSuccess={() => {}} />,
  isOpen: true,
};
PrimaryDark.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ loginForm: { username: 'user', password: 'pass' } }),
];

export const PrimaryError = Template.bind({});
PrimaryError.args = {
  children: <LoginForm isOpen onSuccess={() => {}} />,
  isOpen: true,
};
PrimaryError.decorators = [
  StoreDecorator({ loginForm: { username: 'user', password: 'pass', error: 'ERROR' } }),
];

export const PrimaryDarkError = Template.bind({});
PrimaryDarkError.args = {
  children: <LoginForm isOpen onSuccess={() => {}} />,
  isOpen: true,
};
PrimaryDarkError.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ loginForm: { username: 'user', password: 'pass', error: 'ERROR' } }),
];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: <LoginForm isOpen onSuccess={() => {}} />,
  isOpen: true,
};
PrimaryLoading.decorators = [
  StoreDecorator({ loginForm: { username: 'user', password: 'pass', isLoading: true } }),
];

export const PrimaryDarkLoading = Template.bind({});
PrimaryDarkLoading.args = {
  children: <LoginForm isOpen onSuccess={() => {}} />,
  isOpen: true,
};
PrimaryDarkLoading.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ loginForm: { username: 'user', password: 'pass', isLoading: true } }),
];
