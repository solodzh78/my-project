import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Code } from './Code';

describe('Code', () => {
  test('render', () => {
    ComponentRender(<Code text="hhh" />);
    expect(screen.getByTestId('Code')).toBeInTheDocument();
  });
});
