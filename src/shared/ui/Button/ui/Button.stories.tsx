import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: 'clear',
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: 'clearInverted',
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: 'background',
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'Text',
  theme: 'backgroundInverted',
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'size_m',
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'size_l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'size_xl',
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_m',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_xl',
};

export const OutlineDarkSizeM = Template.bind({});
OutlineDarkSizeM.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_m',
};
OutlineDarkSizeM.decorators = [ThemeDecorator('dark')];

export const OutlineDarkSizeL = Template.bind({});
OutlineDarkSizeL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_l',
};
OutlineDarkSizeL.decorators = [ThemeDecorator('dark')];

export const OutlineDarkSizeXL = Template.bind({});
OutlineDarkSizeXL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_xl',
};
OutlineDarkSizeXL.decorators = [ThemeDecorator('dark')];
