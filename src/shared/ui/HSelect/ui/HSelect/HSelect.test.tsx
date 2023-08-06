import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { HSelect } from './HSelect';

describe('HSelect', () => {
  test('render', () => {
    ComponentRender(<HSelect items={[]} />);
    expect(screen.getByTestId('HSelect')).toBeInTheDocument();
  });
});
