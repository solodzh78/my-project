import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  test('render', () => {
    ComponentRender(<Tabs />);
    expect(screen.getByTestId('Tabs')).toBeInTheDocument();
  });
});
