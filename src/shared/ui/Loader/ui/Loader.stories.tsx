import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Loader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator('dark')];
