import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { ArticlesPageFilters } from './ArticlesPageFilters';

describe('ArticlesPageFilters', () => {
  test('render', () => {
    ComponentRender(<ArticlesPageFilters />);
    expect(screen.getByTestId('ArticlesPageFilters')).toBeInTheDocument();
  });
});
