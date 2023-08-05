/* eslint-disable solodzh-eslint-plugin/path-checker */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Button } from 'shared/ui/Button';
import { DropDown } from './DropDown';

export default {
  title: 'shared/DropDown',
  component: DropDown,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof DropDown>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'item1',
    },
    {
      content: 'item2',
    },
    {
      content: 'item3',
    },
  ],
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator({})];
