import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { HSelect } from './HSelect';

export default {
  title: 'shared/HSelect',
  component: HSelect,
} as ComponentMeta<typeof HSelect>;

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

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof HSelect> = () => <HSelect items={items} />;

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {};
LightNoAuth.decorators = [StoreDecorator({})];
