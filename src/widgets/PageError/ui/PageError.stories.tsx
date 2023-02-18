import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof PageError>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

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
