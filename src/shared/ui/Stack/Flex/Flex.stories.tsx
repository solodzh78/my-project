import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Flex>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const style = { border: '1px solid black', padding: '10px' };
const children = (
  <>
    <div style={style}>first</div>
    <div style={style}>second</div>
    <div style={style}>third</div>
    <div style={style}>fourth</div>
  </>
);

export const Row = Template.bind({});
Row.args = { children };
Row.decorators = [StoreDecorator({})];

export const RowGap4 = Template.bind({});
RowGap4.args = { children, gap: 4 };
RowGap4.decorators = [StoreDecorator({})];

export const RowGap8 = Template.bind({});
RowGap8.args = { children, gap: 8 };
RowGap8.decorators = [StoreDecorator({})];

export const RowGap16 = Template.bind({});
RowGap16.args = { children, gap: 16 };
RowGap16.decorators = [StoreDecorator({})];

export const RowGap32 = Template.bind({});
RowGap32.args = { children, gap: 32 };
RowGap32.decorators = [StoreDecorator({})];

export const Column = Template.bind({});
Column.args = { children, direction: 'column' };

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = { children, direction: 'column', gap: 16 };
ColumnGap16.decorators = [StoreDecorator({})];
