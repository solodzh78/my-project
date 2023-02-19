import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { SideBar } from './SideBar';

export default {
  title: 'widgets/SideBar',
  component: SideBar,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof SideBar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {
  // children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
  // children: 'Text',
  // theme: 'outline',
};
Dark.decorators = [ThemeDecorator('dark')];
