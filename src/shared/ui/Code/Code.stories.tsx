import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Code>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

const args = {
  text: 'export default {\n'
  + '    title: \'shared/Code\',\n'
  + '    component: Code,\n'
  + '    argTypes: {\n'
  + '        backgroundColor: { control: \'color\' },\n'
  + '    },\n'
  + '} as ComponentMeta<typeof Code>;\n'
  + '\n'
  + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
  + '\n'
  + 'export const Normal = Template.bind({});',
};

export const LightNoAuth = Template.bind({});
LightNoAuth.args = args;

export const DarkNoAuth = Template.bind({});
DarkNoAuth.args = args;
DarkNoAuth.decorators = [ThemeDecorator('dark')];
