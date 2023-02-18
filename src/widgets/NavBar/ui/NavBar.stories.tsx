import { ComponentStory, ComponentMeta } from '@storybook/react';
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
  // children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
  // children: 'Text',
  // theme: 'outline',
};
Dark.decorators = [ThemeDecorator('dark')];
