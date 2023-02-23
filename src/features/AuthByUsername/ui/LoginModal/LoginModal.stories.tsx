import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { LoginForm } from '../LoginForm/LoginForm';

import { LoginModal } from './LoginModal';

export default {
  title: 'shared/LoginModal',
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
  children: <LoginForm isOpen />,
  isOpen: true,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: <LoginForm isOpen />,
  isOpen: true,
};
PrimaryDark.decorators = [ThemeDecorator('dark')];
