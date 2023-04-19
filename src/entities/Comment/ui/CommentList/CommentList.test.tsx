import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { CommentList } from './CommentList';

describe('CommentList', () => {
  test('render', () => {
    ComponentRender(<CommentList />);
    expect(screen.getByTestId('CommentList')).toBeInTheDocument();
  });
});
