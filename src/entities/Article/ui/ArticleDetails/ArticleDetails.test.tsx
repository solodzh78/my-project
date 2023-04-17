import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { ArticleDetails } from './ArticleDetails';

describe('ArticleDetails', () => {
  test('render', () => {
    ComponentRender(<ArticleDetails articleId="1" />);
    expect(screen.getByTestId('ArticleDetails')).toBeInTheDocument();
  });
});
