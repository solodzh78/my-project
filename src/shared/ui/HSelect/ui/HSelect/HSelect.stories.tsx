import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
// import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { HSelect } from './HSelect';

export default {
  title: 'shared/HSelect',
  component: HSelect,
  // decorators: [i18nDecorator],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof HSelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof HSelect> = () => <HSelect />;

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {
};
LightNoAuth.decorators = [StoreDecorator({})];
