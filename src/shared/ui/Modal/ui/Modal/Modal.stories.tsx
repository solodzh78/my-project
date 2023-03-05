import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];
