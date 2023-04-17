import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  test('render', () => {
    ComponentRender(<Skeleton />);
    expect(screen.getByTestId('Skeleton')).toBeInTheDocument();
  });
});
