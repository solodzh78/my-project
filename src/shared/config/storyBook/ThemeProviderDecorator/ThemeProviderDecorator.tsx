import { Story } from '@storybook/react';
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { FC } from 'react';

const Temp: FC = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === 'dark' ? 'light' : 'dark'}`}>
      { children }
    </div>
  );
};

export const ThemeProviderDecorator = (StoryComponent: Story) => (
  <ThemeProvider>
    <Temp>
      <StoryComponent />
    </Temp>
  </ThemeProvider>
);
