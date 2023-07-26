import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { ArticleEditPage } from './ArticleEditPage';

describe('ArticleEditPage', () => {
  test('render', () => {
    ComponentRender(<ArticleEditPage />);
    expect(screen.getByTestId('ArticleEditPage')).toBeInTheDocument();
  });
});
