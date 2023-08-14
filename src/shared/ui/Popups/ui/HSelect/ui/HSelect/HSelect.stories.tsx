import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { HSelect } from './HSelect';

const items = [
  {
    id: '1',
    content: 'item1',
  },
  {
    id: '2',
    content: 'item2',
  },
  {
    id: '3',
    content: 'item3',
  },
];

export default {
  title: 'shared/HSelect',
  component: HSelect,
  args: {
    items,
    label: 'select item',
    defaultValue: 'item not selected',
  },
} as ComponentMeta<typeof HSelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof HSelect> = (args) => {
  const [v, setV] = useState<string>();

  return (
    <HSelect
      value={v}
      onChange={
        (item) => {
          setV(item);
        }
      }
      {...args}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [(Story) => <div style={{ padding: '200px' }}><Story /></div>];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [
  (Story) => <div style={{ padding: '200px' }}><Story /></div>,
  ThemeDecorator('dark'),
];
