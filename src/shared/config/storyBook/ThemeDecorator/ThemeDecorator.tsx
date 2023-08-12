import { FC, ReactNode } from 'react';
import { Story } from '@storybook/react';
import { Theme, ThemeProvider, useTheme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

const App: FC<{children: ReactNode}> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      { children }
    </div>
  );
};

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <App>
      <StoryComponent />
    </App>
  </ThemeProvider>
);
