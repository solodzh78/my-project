import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { i18nDecorator } from 'shared/config/storyBook/i18nDecorator/i18nDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { SideBar } from './SideBar';
// import 'shared/config/i18n/i18n';

export default {
  title: 'widgets/SideBar',
  component: SideBar,
  // decorators: [i18nDecorator],
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
