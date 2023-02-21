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
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maiores, modi asperiores in exercitationem aperiam! Necessitatibus expedita eum dolor, iure, mollitia itaque asperiores ut velit porro est magni accusamus. Quam.',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maiores, modi asperiores in exercitationem aperiam! Necessitatibus expedita eum dolor, iure, mollitia itaque asperiores ut velit porro est magni accusamus. Quam.',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];
