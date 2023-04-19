import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { ArticleCommentsList } from './ArticleCommentsList';

describe('ArticleCommentsList', () => {
  test('render', () => {
    ComponentRender(<ArticleCommentsList />);
    expect(screen.getByTestId('ArticleCommentsList')).toBeInTheDocument();
  });
});
